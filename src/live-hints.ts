import chalk from 'chalk';
import { parseCommand, ParsedCommand } from './parser';
import { HINTS_V1 } from './database';

export interface LiveHint {
	type: 'command' | 'flag' | 'suggestion';
	content: string;
	description: string;
	position: number;
}

export class LiveHintsEngine {
	private lastCommand = '';
	private hintCache = new Map<string, LiveHint[]>();

	/**
	 * Main entry point - generates hints for any command input
	 */
	generateHints(input: string): LiveHint[] {
		// Simple caching to avoid re-parsing same command
		if (this.lastCommand === input) {
			return this.hintCache.get(input) || [];
		}

		const hints: LiveHint[] = [];
		const parsed = parseCommand(input);

		if (!parsed) {
			hints.push(...this.getCommandSuggestions(input));
		} else {
			hints.push(...this.getFlagHints(parsed, input));
		}

		this.lastCommand = input;
		this.hintCache.set(input, hints);
		return hints;
	}


	private getCommandSuggestions(input: string): LiveHint[] {
		const hints: LiveHint[] = [];
		const words = input.trim().split(/\s+/);
		const currentWord = words[words.length - 1] || '';

		const matchingCommands = Object.keys(HINTS_V1)
			.filter(cmd => cmd.startsWith(currentWord))
			.slice(0, 3);

		matchingCommands.forEach(cmd => {
			const commandInfo = HINTS_V1[cmd];
			if (commandInfo) {
				hints.push({
					type: 'suggestion',
					content: cmd,
					description: commandInfo.desc,
					position: input.length - currentWord.length
				});
			}
		});

		return hints;
	}

	private getFlagHints(parsed: ParsedCommand, input: string): LiveHint[] {
		const hints: LiveHint[] = [];
		const commandInfo = HINTS_V1[parsed.cmd];

		if (!commandInfo) return hints;

		hints.push({
			type: 'command',
			content: parsed.cmd,
			description: commandInfo.desc,
			position: 0
		});

		Object.entries(parsed.flags).forEach(([flag, value]) => {
			const flagDesc = commandInfo.flags[flag];
			if (flagDesc) {
				hints.push({
					type: 'flag',
					content: flag + (value ? ` ${value}` : ''),
					description: flagDesc,
					position: input.indexOf(flag)
				});
			}
		});

		// Suggest other useful flags they haven't used yet
		const unusedFlags = Object.keys(commandInfo.flags)
			.filter(flag => !Object.keys(parsed.flags).includes(flag))
			.slice(0, 3);

		unusedFlags.forEach(flag => {
			hints.push({
				type: 'suggestion',
				content: flag,
				description: commandInfo.flags[flag] || "--",
				position: input.length
			});
		});

		return hints;
	}

	formatHints(hints: LiveHint[], compact: boolean = false): string {
		if (hints.length === 0) return '';

		const lines: string[] = [];
		const commandHints = hints.filter(h => h.type === 'command');
		const flagHints = hints.filter(h => h.type === 'flag');
		const suggestionHints = hints.filter(h => h.type === 'suggestion');

		if (commandHints.length > 0 && !compact) {
			const cmd = commandHints[0];
			if (cmd)
				lines.push(chalk.blue(` ${cmd.content}`) + chalk.gray(` - ${cmd.description}`));
		}

		if (flagHints.length > 0) {
			flagHints.forEach(hint => {
				const flagOnly = hint.content.split(' ')[0];
				lines.push(chalk.green(`  ${flagOnly}`) + chalk.gray(` - ${hint.description}`));
			});
		}

		if (suggestionHints.length > 0) {
			const topSuggestions = suggestionHints.slice(0, 2);
			const shortSuggestions = topSuggestions.map(hint => {
				const shortDesc = this.shortenDescription(hint.description);
				return chalk.cyan(hint.content) + chalk.gray(` (${shortDesc})`);
			}).join('  ');

			lines.push(chalk.yellow(' Try: ') + shortSuggestions);
		}

		return lines.join('\n');
	}


	private shortenDescription(desc: string): string {
		const shortMappings: Record<string, string> = {
			'long format (permissions, owner, size, date)': 'detailed list',
			'human-readable sizes (1K, 5M)': 'readable sizes',
			'sort by modification time newest first': 'newest first',
			'include hidden files (.*)': 'show hidden',
			'interactive (keep STDIN open)': 'interactive',
			'allocate pseudo-TTY': 'with terminal',
			'run container in background (detached)': 'background mode',
			'automatically stage all modified files': 'stage all changes',
			'commit message': 'add message',
			'force removal without prompts': 'force delete',
			'copy directories recursively': 'copy folders too'
		};

		return shortMappings[desc] || desc.split(' ').slice(0, 3).join(' ');
	}


	formatHintsCompact(hints: LiveHint[]): string {
		return this.formatHints(hints, true);
	}

	// Keep cache small for performance
	clearCache(): void {
		this.hintCache.clear();
	}
}

export const liveHints = new LiveHintsEngine();
