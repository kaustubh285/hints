export const HINTS_TIER2 = {
	// Network Commands (4)
	curl: {
		desc: "Transfer data from or to servers",
		flags: {
			"-X": "specify HTTP method (GET, POST, PUT, DELETE)",
			"-H": "add custom header",
			"-d": "send data in POST request",
			"-o": "write output to file",
			"-O": "write output to file with remote name",
			"-L": "follow redirects",
			"-v": "verbose output with headers",
			"-s": "silent mode (no progress bar)",
			"-f": "fail silently on HTTP errors",
			"-u": "specify username:password for authentication",
			"-k": "ignore SSL certificate errors",
			"-w": "write out specific info after transfer"
		}
	},
	wget: {
		desc: "Download files from web servers",
		flags: {
			"-r": "download recursively",
			"-np": "don't ascend to parent directory",
			"-k": "convert links for local viewing",
			"-p": "download all page dependencies",
			"-c": "continue partial downloads",
			"-t": "set number of retries",
			"-O": "specify output filename",
			"-q": "quiet mode",
			"--limit-rate": "limit download speed",
			"--user-agent": "set user agent string",
			"--no-check-certificate": "ignore SSL certificate errors"
		}
	},
	ssh: {
		desc: "Secure shell for remote login",
		flags: {
			"-p": "specify port number",
			"-i": "use specific identity file (private key)",
			"-l": "specify username",
			"-v": "verbose mode for debugging",
			"-X": "enable X11 forwarding",
			"-L": "local port forwarding",
			"-R": "remote port forwarding",
			"-N": "don't execute remote command",
			"-f": "go to background after authentication",
			"-o": "set configuration options",
			"-t": "force pseudo-terminal allocation"
		}
	},
	scp: {
		desc: "Secure copy files over SSH",
		flags: {
			"-r": "copy directories recursively",
			"-P": "specify port number",
			"-i": "use specific identity file",
			"-v": "verbose mode",
			"-C": "enable compression",
			"-p": "preserve modification times and modes",
			"-q": "quiet mode",
			"-o": "pass options to ssh"
		}
	},

	// Edit Commands (6)
	nano: {
		desc: "Simple text editor",
		flags: {
			"-w": "disable line wrapping",
			"-m": "enable mouse support",
			"-i": "auto-indent new lines",
			"-T": "set tab size",
			"-B": "save backups of existing files",
			"-E": "convert tabs to spaces",
			"+LINE": "start at specific line number"
		}
	},
	vim: {
		desc: "Advanced text editor",
		flags: {
			"-n": "no swap file",
			"-R": "read-only mode",
			"+LINE": "start at specific line",
			"-o": "open files in horizontal splits",
			"-O": "open files in vertical splits",
			"-d": "diff mode",
			"-x": "ask for encryption key",
			"-r": "recovery mode for swap files",
			"-s": "silent mode (for scripting)"
		}
	},
	cat: {
		desc: "Display file contents",
		flags: {
			"-n": "number all output lines",
			"-b": "number non-empty lines only",
			"-s": "squeeze multiple blank lines",
			"-A": "show all non-printing characters",
			"-v": "show non-printing characters except tabs/newlines",
			"-T": "show tabs as ^I",
			"-E": "show end of lines as $"
		}
	},
	less: {
		desc: "View file contents with pagination",
		flags: {
			"-N": "show line numbers",
			"-S": "don't wrap long lines",
			"-i": "case-insensitive search",
			"-F": "quit if entire file fits on screen",
			"-X": "don't clear screen on exit",
			"-R": "display ANSI color codes",
			"+F": "follow mode (like tail -f)",
			"-p": "start at first occurrence of pattern"
		}
	},
	head: {
		desc: "Display first lines of file",
		flags: {
			"-n": "number of lines to show",
			"-c": "number of bytes to show",
			"-v": "always show filename headers",
			"-q": "never show filename headers"
		}
	},
	tail: {
		desc: "Display last lines of file",
		flags: {
			"-n": "number of lines to show",
			"-c": "number of bytes to show",
			"-f": "follow file changes (watch mode)",
			"-F": "follow with retry (handles log rotation)",
			"-v": "always show filename headers",
			"-q": "never show filename headers",
			"--pid": "terminate after process dies"
		}
	},

	// System Commands (5)
	df: {
		desc: "Display filesystem disk space usage",
		flags: {
			"-h": "human readable sizes",
			"-T": "show filesystem type",
			"-i": "show inode information",
			"-a": "include pseudo filesystems",
			"-x": "exclude filesystem types",
			"--total": "show total summary"
		}
	},
	du: {
		desc: "Display directory space usage",
		flags: {
			"-h": "human readable sizes",
			"-s": "summary (total for each argument)",
			"-a": "show sizes for all files",
			"-d": "max depth of recursion",
			"-c": "show grand total",
			"-x": "skip different filesystems",
			"--max-depth": "limit recursion depth"
		}
	},
	top: {
		desc: "Display running processes",
		flags: {
			"-p": "monitor specific process IDs",
			"-u": "monitor processes for specific user",
			"-d": "update delay in seconds",
			"-n": "number of iterations then exit",
			"-b": "batch mode (non-interactive)",
			"-H": "show threads"
		}
	},
	htop: {
		desc: "Interactive process viewer (enhanced top)",
		flags: {
			"-d": "update delay in tenths of seconds",
			"-u": "show processes for specific user",
			"-p": "show specific process IDs only",
			"-s": "sort by specified column",
			"-C": "no color mode",
			"-t": "tree view"
		}
	},
	free: {
		desc: "Display memory usage",
		flags: {
			"-h": "human readable sizes",
			"-m": "show in megabytes",
			"-g": "show in gigabytes",
			"-s": "continuously update every N seconds",
			"-c": "update N times then exit",
			"-t": "show total line"
		}
	},

	// Package Managers (3)
	bun: {
		desc: "Fast JavaScript runtime and package manager",
		flags: {
			"install": "install dependencies",
			"add": "add package to dependencies",
			"remove": "remove package",
			"run": "run package.json script",
			"dev": "run in development mode",
			"build": "bundle for production",
			"test": "run tests",
			"--production": "skip devDependencies",
			"--frozen-lockfile": "don't update bun.lockb"
		}
	},
	yarn: {
		desc: "Fast package manager for JavaScript",
		flags: {
			"install": "install dependencies",
			"add": "add package to dependencies",
			"remove": "remove package",
			"upgrade": "upgrade packages",
			"run": "run package.json script",
			"--dev": "add to devDependencies",
			"--global": "install globally",
			"--frozen-lockfile": "don't update yarn.lock",
			"--production": "skip devDependencies"
		}
	},
	pnpm: {
		desc: "Performant npm - efficient package manager",
		flags: {
			"install": "install dependencies",
			"add": "add package to dependencies",
			"remove": "remove package",
			"update": "update packages",
			"run": "run package.json script",
			"--save-dev": "add to devDependencies",
			"--global": "install globally",
			"--frozen-lockfile": "don't update pnpm-lock.yaml",
			"--prod": "skip devDependencies"
		}
	},

	// Process Commands (2)
	pgrep: {
		desc: "Find process IDs by name or criteria",
		flags: {
			"-f": "match against full command line",
			"-i": "case-insensitive matching",
			"-l": "list process names with PIDs",
			"-n": "newest matching process",
			"-o": "oldest matching process",
			"-u": "match processes owned by user",
			"-x": "exact match only",
			"-v": "invert match (exclude pattern)"
		}
	},
	pkill: {
		desc: "Kill processes by name or criteria",
		flags: {
			"-f": "match against full command line",
			"-i": "case-insensitive matching",
			"-n": "kill newest matching process",
			"-o": "kill oldest matching process",
			"-u": "kill processes owned by user",
			"-x": "exact match only",
			"-TERM": "send SIGTERM signal (default)",
			"-KILL": "send SIGKILL signal (force kill)"
		}
	},

	// Advanced Git Commands (4)
	checkout: {
		desc: "Switch branches or restore working tree files",
		flags: {
			"-b": "create and switch to new branch",
			"-B": "create/reset and switch to branch",
			"-t": "set up tracking with remote branch",
			"-f": "force checkout (discard local changes)",
			"-p": "interactively select hunks",
			"--": "separate tree-ish from pathspecs",
			"-m": "merge local changes when switching"
		}
	},
	rebase: {
		desc: "Reapply commits on top of another base",
		flags: {
			"-i": "interactive rebase",
			"--onto": "rebase onto specific commit",
			"--continue": "continue after resolving conflicts",
			"--abort": "abort rebase and return to original state",
			"--skip": "skip current commit and continue",
			"-p": "preserve merges",
			"--exec": "execute command after each commit"
		}
	},
	merge: {
		desc: "Join two or more development histories",
		flags: {
			"--no-ff": "always create merge commit",
			"--ff-only": "only merge if fast-forward possible",
			"--squash": "squash commits into single commit",
			"-s": "specify merge strategy",
			"-m": "merge commit message",
			"--abort": "abort merge and return to pre-merge state",
			"--continue": "continue merge after resolving conflicts"
		}
	},
	stash: {
		desc: "Temporarily save changes in working directory",
		flags: {
			"push": "save current changes to stash",
			"pop": "apply and remove most recent stash",
			"apply": "apply stash without removing it",
			"list": "list all stashes",
			"show": "show stash contents",
			"drop": "delete specific stash",
			"clear": "delete all stashes",
			"-u": "include untracked files",
			"-k": "keep index unchanged"
		}
	}
};
