import { parse as shellParse } from 'shell-quote';
import type { ParseEntry } from 'shell-quote';
import { HINTS_V1 } from './database';

export interface ParsedCommand {
	cmd: string;
	flags: Record<string, string | undefined>;
	args: string[];
}

export function parseCommand(input: string): ParsedCommand | null {
	const tokens: ParseEntry[] = shellParse(input);
	if (!tokens.length) return null;

	const words = tokens
		.filter(t => typeof t === 'string')
		.map(t => t as string);

	if (!words.length) return null;

	const cmd = words[0];
	if (!cmd) {
		return null;
	}


	let matchedCmd = cmd;
	if (['git', 'docker', 'npm'].includes(cmd) && words[1]) {
		const subCmd = words[1];
		if (Object.keys(HINTS_V1).includes(subCmd)) {
			matchedCmd = subCmd;
		}
	}

	const isKnown = Object.keys(HINTS_V1).includes(matchedCmd);

	if (!isKnown) return null;

	const flags: Record<string, string | undefined> = {};
	for (let i = 1; i < words.length; i++) {
		const token = words[i];
		if (!token) continue;

		if (token.startsWith('-') && !token.startsWith('--')) {

			const flagChars = token.slice(1);
			const eqIndex = token.indexOf('=');

			if (eqIndex > 0) {
				flags[token.slice(0, eqIndex)] = token.slice(eqIndex + 1);
			} else if (flagChars.length === 1) {
				const nextToken = words[i + 1];
				flags[token] = nextToken?.startsWith('-') ? undefined : nextToken;
				if (nextToken && !nextToken.startsWith('-')) i++;
			} else {
				for (const char of flagChars) {
					flags[`-${char}`] = undefined;
				}
			}
		} else if (token.startsWith('--')) {
			const eqIndex = token.indexOf('=');
			const flagName = token.split('=')[0];
			if (flagName) {
				flags[flagName] = token.includes('=') ? token.split('=')[1] : undefined;
			}
		}
	}

	return { cmd: matchedCmd, flags, args: words.slice(1) };
}
