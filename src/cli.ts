#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { parseCommand } from './parser';
import { HINTS_V1 } from './database';
import { liveHints } from './live-hints';
import { shellIntegrator } from './shell-integration';

const program = new Command()
	.name('hints')
	.description('Smart terminal command hints for developers')
	.version('1.0.0');

// Main command - explain what a command does
program
	.command('explain')
	.description('Explain a command and its flags')
	.argument('<command>', 'command to explain')
	.action((cmd: string) => {
		const parsed = parseCommand(cmd);
		if (!parsed) {
			console.log(chalk.red('❌ Unknown command'));
			return;
		}

		console.log(chalk.gray(`
${parsed.cmd} → ${HINTS_V1[parsed.cmd]?.desc || 'No description'}
${Object.entries(parsed.flags).map(([f, v]) =>
			`${f}${v ? ' ' + v : ''} → ${HINTS_V1[parsed.cmd]?.flags[f] || 'Unknown flag'}`
		).join('\n')}
    `));
	});

// Live hints - used by shell integration
program
	.command('live')
	.description('Show live hints (used by shell integration)')
	.argument('<command>', 'command to analyze')
	.option('--compact', 'compact output format')
	.action((cmd: string, options) => {
		const hints = liveHints.generateHints(cmd);
		const formatted = options.compact
			? liveHints.formatHintsCompact(hints)
			: liveHints.formatHints(hints);

		console.log(formatted || chalk.gray('No hints available'));
	});

// Shell integration commands
program
	.command('install')
	.description('Install shell integration (adds Ctrl+H trigger)')
	.action(() => {
		shellIntegrator.install();
	});

program
	.command('uninstall')
	.description('Remove shell integration')
	.action(() => {
		shellIntegrator.uninstall();
	});

program
	.command('status')
	.description('Check if shell integration is active')
	.action(() => {
		const installed = shellIntegrator.isInstalled();
		if (installed) {
			console.log(chalk.green('✅ Shell integration active'));
			console.log(chalk.blue(' Press Ctrl+H while typing commands for hints!'));
		} else {
			console.log(chalk.red('❌ Shell integration not installed'));
			console.log(chalk.yellow(' Run: hints install'));
		}
	});

// Cleanup helper
program
	.command('cleanup')
	.description('Clean up shell session after uninstall')
	.action(() => {
		console.log(chalk.blue('🧹 Cleaning up shell session...\n'));
		console.log(chalk.yellow('Run these commands:'));
		console.log(chalk.cyan('unset -f hints_widget'));
		console.log(chalk.cyan('bindkey -r "^H"'));
		console.log(chalk.cyan('source ~/.zshrc'));
		console.log('');
		console.log(chalk.green(' Or just restart your terminal!'));
	});

program.parse();
