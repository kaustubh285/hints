export type HINTS = {
	[command: string]: {
		desc: string;
		flags: {
			[flag: string]: string;
		};
	};
};
