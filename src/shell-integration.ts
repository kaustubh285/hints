import { writeFileSync, readFileSync, existsSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import chalk from 'chalk';

export interface ShellConfig {
	shell: 'zsh' | 'bash' | 'fish';
	configFile: string;
	hookCode: string;
}

export class ShellIntegrator {
	private getShellConfig(): ShellConfig {
		const shell = process.env.SHELL?.split('/').pop() as 'zsh' | 'bash' | 'fish' || 'bash';

		const configs = {
			zsh: {
				shell: 'zsh' as const,
				configFile: join(homedir(), '.zshrc'),
				hookCode: `
# Hints CLI Integration - Manual Trigger
hints_widget() {
    local current_line="$BUFFER"
    if [[ -n "$current_line" ]]; then
        local hint_output=$(hints live "$current_line" --compact 2>/dev/null)
        if [[ -n "$hint_output" ]]; then
            echo
            echo "$hint_output"
            echo
            zle reset-prompt
        else
            echo
            echo " No hints available for: $current_line"
            echo
            zle reset-prompt
        fi
    else
        echo
        echo " Type a command first, then press Ctrl+H for hints"
        echo
        zle reset-prompt
    fi
}

# Create widget and bind to Ctrl+H
zle -N hints_widget
bindkey '^H' hints_widget
`
			},
			bash: {
				shell: 'bash' as const,
				configFile: join(homedir(), '.bashrc'),
				hookCode: `
# Hints CLI Integration - Manual Trigger
hints_widget() {
    local current_line="$READLINE_LINE"
    if [[ -n "$current_line" ]]; then
        local hint_output=$(hints live "$current_line" --compact 2>/dev/null)
        if [[ -n "$hint_output" ]]; then
            echo
            echo "$hint_output"
            echo
        fi
    fi
}

# Bind to Ctrl+H
bind -x '"\\C-h": hints_widget'
`
			},
			fish: {
				shell: 'fish' as const,
				configFile: join(homedir(), '.config/fish/config.fish'),
				hookCode: `
# Hints CLI Integration - Manual Trigger
function hints_widget
    set current_line (commandline)
    if test -n "$current_line"
        set hint_output (hints live "$current_line" --compact 2>/dev/null)
        if test -n "$hint_output"
            echo
            echo "$hint_output"
            echo
            commandline -f repaint
        end
    end
end

# Bind to Ctrl+H
bind \\ch hints_widget
`
			}
		};

		return configs[shell] || configs.bash;
	}

	install(): boolean {
		const config = this.getShellConfig();

		try {
			let content = '';
			if (existsSync(config.configFile)) {
				content = readFileSync(config.configFile, 'utf8');
			}

			// Don't install twice
			if (content.includes('# Hints CLI Integration')) {
				console.log(chalk.yellow('⚠️  Hints integration already installed'));
				return true;
			}

			const newContent = content + '\n' + config.hookCode;
			writeFileSync(config.configFile, newContent);

			console.log(chalk.green(`✅ Installed hints integration for ${config.shell}`));
			console.log(chalk.blue(` Config: ${config.configFile}`));
			console.log(chalk.yellow(`🔄 Run: source ${config.configFile} or restart terminal`));
			console.log(chalk.cyan(` Usage: Type command, press Ctrl+H for hints!`));

			return true;
		} catch (error) {
			console.error(chalk.red(`❌ Install failed: ${error}`));
			return false;
		}
	}

	uninstall(): boolean {
		const config = this.getShellConfig();

		try {
			if (!existsSync(config.configFile)) {
				console.log(chalk.yellow('⚠️  Config file not found'));
				return true;
			}

			const content = readFileSync(config.configFile, 'utf8');

			const lines = content.split('\n');
			const filteredLines = [];
			let inHintsBlock = false;

			for (const line of lines) {
				if (line.includes('# Hints CLI Integration')) {
					inHintsBlock = true;
					continue;
				}
				if (inHintsBlock && line.trim() === '') {
					inHintsBlock = false;
					continue;
				}
				if (!inHintsBlock) {
					filteredLines.push(line);
				}
			}

			writeFileSync(config.configFile, filteredLines.join('\n'));
			console.log(chalk.green(`✅ Uninstalled hints integration for ${config.shell}`));
			console.log(chalk.yellow('🔄 Clean current shell session:'));
			console.log(chalk.cyan('unset -f hints_widget'));
			console.log(chalk.cyan('bindkey -r "^H"'));
			console.log(chalk.cyan('source ~/.zshrc'));

			return true;
		} catch (error) {
			console.error(chalk.red(`❌ Uninstall failed: ${error}`));
			return false;
		}
	}

	isInstalled(): boolean {
		const config = this.getShellConfig();

		if (!existsSync(config.configFile)) return false;

		const content = readFileSync(config.configFile, 'utf8');
		return content.includes('# Hints CLI Integration');
	}
}

export const shellIntegrator = new ShellIntegrator();
