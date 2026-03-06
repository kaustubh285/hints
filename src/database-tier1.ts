import { HINTS } from "./types";

export const HINTS_TIER1: HINTS = {
	// === File/Navigation (10) ===
	ls: {
		desc: "List directory contents",
		flags: {
			"-l": "long format (permissions, owner, size, date)",
			"-a": "include hidden files (.*)",
			"-h": "human-readable sizes (1K, 5M)",
			"-t": "sort by modification time newest first",
			"-R": "recursive directory listing"
		}
	},
	cd: {
		desc: "Change working directory",
		flags: {
			"-": "previous directory",
			"~": "home directory",
			"..": "parent directory"
		}
	},
	pwd: {
		desc: "Print working directory",
		flags: {
			"-L": "logical path (follow symlinks)",
			"-P": "physical path (no symlinks)"
		}
	},
	mkdir: {
		desc: "Create directories",
		flags: {
			"-p": "parents (no error if exists)",
			"-v": "verbose creation messages"
		}
	},
	rm: {
		desc: "Remove files/directories",
		flags: {
			"-r": "recursive (directories)",
			"-f": "force (no prompts)",
			"-v": "verbose"
		}
	},
	mv: {
		desc: "Move/rename files",
		flags: {
			"-i": "prompt before overwrite",
			"-u": "update only if newer",
			"-v": "verbose"
		}
	},
	cp: {
		desc: "Copy files/directories",
		flags: {
			"-r": "recursive (directories)",
			"-v": "verbose",
			"-u": "update only newer files"
		}
	},
	find: {
		desc: "Search for files in directory hierarchy",
		flags: {
			"-name": "match filename pattern",
			"-type": "file type (f=directory=l=symlink)",
			"-exec": "execute command on matches"
		}
	},

	// === Git (7) ===
	git: {
		desc: "Version control system",
		flags: { "--help": "show git help" }
	},
	"git commit": {
		desc: "Record changes to repository",
		flags: {
			"-m": "commit message",
			"--amend": "modify last commit",
			"-a": "stage tracked files",
			"--no-verify": "bypass pre-commit hooks"
		}
	},
	"git push": {
		desc: "Update remote refs with local changes",
		flags: {
			"-u": "set upstream tracking",
			"--force": "force push (dangerous)"
		}
	},
	"git pull": {
		desc: "Fetch from remote and merge",
		flags: {
			"--rebase": "rebase instead of merge"
		}
	},
	"git branch": {
		desc: "List/create/delete branches",
		flags: {
			"-d": "delete branch",
			"-m": "rename branch"
		}
	},
	"git status": {
		desc: "Show working tree status",
		flags: {
			"-s": "short format",
			"-b": "show branch info"
		}
	},
	"git log": {
		desc: "Show commit history",
		flags: {
			"--oneline": "one line per commit",
			"--graph": "ASCII commit graph",
			"-p": "show patch"
		}
	},

	// === Docker (4) ===
	docker: {
		desc: "Container engine",
		flags: { "--help": "show docker help" }
	},
	"docker run": {
		desc: "Run container from image",
		flags: {
			"-p": "publish port (host:container)",
			"-v": "mount volume (host:container)",
			"-d": "detached/background mode",
			"--rm": "remove on exit",
			"-e": "environment variable"
		}
	},
	"docker ps": {
		desc: "List containers",
		flags: {
			"-a": "all containers (incl stopped)",
			"-q": "quiet (IDs only)"
		}
	},
	"docker build": {
		desc: "Build image from Dockerfile",
		flags: {
			"-t": "tag image name",
			"--no-cache": "don't use cache"
		}
	},

	// === NPM (3) ===
	npm: {
		desc: "JavaScript package manager",
		flags: { "--help": "show npm help" }
	},
	"npm install": {
		desc: "Install packages",
		flags: {
			"-g": "global install",
			"--save-dev": "devDependency",
			"--legacy-peer-deps": "ignore peer conflicts"
		}
	},
	"npm start": {
		desc: "Run start script",
		flags: { "--": "pass args to script" }
	},

	// === Process/Search ===
	kill: {
		desc: "Terminate processes by PID",
		flags: {
			"-9": "force kill (SIGKILL)",
			"-l": "list signals"
		}
	},
	grep: {
		desc: "Search text patterns",
		flags: {
			"-r": "recursive",
			"-i": "case insensitive",
			"-n": "show line numbers",
			"-l": "filenames only"
		}
	},
} as const;
