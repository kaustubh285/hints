import { HINTS_TIER1 } from "./database-tier1";
import { HINTS_TIER2 } from "./database-tier2";
import { HINTS } from "./types";

export const HINTS_V1: HINTS = {
	ls: {
		desc: "List directory contents",
		flags: {
			"-l": "long list format (permissions, sizes)",
			"-a": "show hidden files (.*)",
			"-h": "human readable sizes (1K, 5M)",
			"-t": "sort by modification time",
			"-r": "reverse order while sorting",
			"-S": "sort by file size"
		}
	},
	cd: {
		desc: "Change directory",
		flags: {
			"~": "go to home directory",
			"-": "go to previous directory",
			"..": "go up one directory",
			"/": "go to root directory"
		}
	},
	pwd: {
		desc: "Print working directory",
		flags: {
			"-P": "avoid all symlinks",
			"-L": "use PWD from environment"
		}
	},
	mkdir: {
		desc: "Create directories",
		flags: {
			"-p": "create parent directories as needed",
			"-v": "verbose output",
			"-m": "set file mode (permissions)"
		}
	},
	rm: {
		desc: "Remove files and directories",
		flags: {
			"-r": "remove directories recursively",
			"-f": "force removal without prompts",
			"-i": "prompt before every removal",
			"-v": "verbose output"
		}
	},
	mv: {
		desc: "Move/rename files and directories",
		flags: {
			"-i": "prompt before overwrite",
			"-f": "force move without prompts",
			"-v": "verbose output",
			"-n": "do not overwrite existing files"
		}
	},
	cp: {
		desc: "Copy files and directories",
		flags: {
			"-r": "copy directories recursively",
			"-i": "prompt before overwrite",
			"-f": "force copy without prompts",
			"-v": "verbose output",
			"-p": "preserve timestamps and permissions"
		}
	},
	find: {
		desc: "Search for files and directories",
		flags: {
			"-name": "search by filename pattern",
			"-type": "search by type (f=file, d=directory)",
			"-size": "search by file size",
			"-mtime": "search by modification time",
			"-exec": "execute command on found files",
			"-maxdepth": "limit search depth"
		}
	},

	// Git Commands (5)
	git: {
		desc: "Distributed version control system",
		flags: {
			"--version": "show git version",
			"--help": "show help information",
			"-C": "run as if git was started in specified path"
		}
	},
	commit: {
		desc: "Record changes to repository",
		flags: {
			"-m": "commit message",
			"-a": "automatically stage all modified files",
			"--amend": "amend the previous commit",
			"-v": "show diff in commit message editor",
			"--no-verify": "bypass pre-commit hooks"
		}
	},
	push: {
		desc: "Upload local repository content to remote",
		flags: {
			"-u": "set upstream for the branch",
			"--force": "force push (dangerous)",
			"--dry-run": "show what would be pushed",
			"--tags": "push tags along with commits"
		}
	},
	pull: {
		desc: "Fetch and integrate from remote repository",
		flags: {
			"--rebase": "rebase instead of merge",
			"--ff-only": "only update if fast-forward possible",
			"--no-commit": "don't auto-commit merge",
			"-v": "verbose output"
		}
	},
	branch: {
		desc: "List, create, or delete branches",
		flags: {
			"-a": "list all branches (local and remote)",
			"-r": "list remote branches",
			"-d": "delete branch",
			"-m": "move/rename branch",
			"--merged": "list branches merged into HEAD"
		}
	},
	status: {
		desc: "Show working tree status",
		flags: {
			"-s": "short format output",
			"-b": "show branch information",
			"--porcelain": "machine-readable output",
			"-u": "show untracked files"
		}
	},
	log: {
		desc: "Show commit history",
		flags: {
			"--oneline": "condensed one line per commit",
			"--graph": "show ASCII graph of branches",
			"-n": "limit number of commits shown",
			"--since": "show commits since date",
			"--author": "filter by author"
		}
	},

	// Docker Commands (3)
	docker: {
		desc: "Container platform for applications",
		flags: {
			"--version": "show docker version",
			"--help": "show help information"
		}
	},
	exec: {
		desc: "Execute command in running container",
		flags: {
			"-i": "interactive (keep STDIN open)",
			"-t": "allocate pseudo-TTY",
			"-it": "interactive mode with TTY",
			"-d": "detached mode (run in background)",
			"-u": "specify user (name or UID)",
			"-w": "working directory inside container",
			"-e": "set environment variables",
			"--privileged": "give extended privileges"
		}
	},
	logs: {
		desc: "Show container logs",
		flags: {
			"-f": "follow log output (tail -f)",
			"-t": "show timestamps",
			"--tail": "number of lines from end",
			"--since": "show logs since timestamp",
			"--until": "show logs until timestamp"
		}
	},
	stop: {
		desc: "Stop running container",
		flags: {
			"-t": "seconds to wait before killing"
		}
	},
	start: {
		desc: "Start stopped container",
		flags: {
			"-a": "attach STDOUT/STDERR",
			"-i": "attach container's STDIN"
		}
	},
	restart: {
		desc: "Restart container",
		flags: {
			"-t": "seconds to wait before killing"
		}
	},
	"docker rm": {
		desc: "Remove containers",
		flags: {
			"-f": "force removal of running container",
			"-v": "remove associated volumes",
			"-l": "remove specified link"
		}
	},
	rmi: {
		desc: "Remove images",
		flags: {
			"-f": "force removal",
			"--no-prune": "don't delete untagged parents"
		}
	},
	images: {
		desc: "List images",
		flags: {
			"-a": "show all images (including intermediates)",
			"-q": "only show image IDs",
			"--format": "format output using template",
			"--filter": "filter output based on conditions"
		}
	},
	run: {
		desc: "Create and start a new container",
		flags: {
			"-d": "run container in background (detached)",
			"-p": "publish container port to host",
			"-v": "bind mount a volume",
			"-e": "set environment variables",
			"--name": "assign name to container",
			"--rm": "remove container when it exits",
			"-it": "interactive mode with pseudo-TTY"
		}
	},
	ps: {
		desc: "List running containers",
		flags: {
			"-a": "show all containers (running and stopped)",
			"-q": "only show container IDs",
			"-s": "show total file sizes",
			"--format": "format output using template",
			"-f": "filter output based on conditions"
		}
	},
	build: {
		desc: "Build image from Dockerfile",
		flags: {
			"-t": "tag the image with name",
			"-f": "specify Dockerfile path",
			"--no-cache": "don't use cache when building",
			"--pull": "always attempt to pull newer base image",
			"--build-arg": "set build-time variables"
		}
	},

	// NPM Commands (2)
	npm: {
		desc: "Node.js package manager",
		flags: {
			"--version": "show npm version",
			"--help": "show help information",
			"-g": "operate in global mode"
		}
	},
	install: {
		desc: "Install packages from package.json or specified packages",
		flags: {
			"--save": "save to dependencies",
			"--save-dev": "save to devDependencies",
			"-g": "install globally",
			"--production": "skip devDependencies",
			"--frozen-lockfile": "don't update package-lock.json"
		}
	},
	"npm start": {
		desc: "Run the start script defined in package.json",
		flags: {
			"--": "pass arguments to the script",
			"--silent": "prevent npm from showing output"
		}
	},

	// Process Commands (1)
	kill: {
		desc: "Terminate processes by PID",
		flags: {
			"-9": "force kill (SIGKILL)",
			"-15": "graceful termination (SIGTERM)",
			"-l": "list available signals",
			"-s": "specify signal to send"
		}
	},

	// Search Commands (1)
	grep: {
		desc: "Search text patterns in files",
		flags: {
			"-i": "case-insensitive search",
			"-r": "search recursively in directories",
			"-n": "show line numbers",
			"-v": "invert match (show non-matching lines)",
			"-l": "show only filenames with matches",
			"-c": "count matching lines",
			"-A": "show N lines after match",
			"-B": "show N lines before match"
		}
	},
	psql: {
		desc: "PostgreSQL interactive terminal",
		flags: {
			"-U": "database username",
			"-d": "database name to connect to",
			"-h": "database server host",
			"-p": "database server port",
			"-c": "execute command and exit",
			"-f": "execute commands from file",
			"-l": "list available databases",
			"-q": "quiet mode",
			"-v": "set variable",
			"-W": "force password prompt"
		}
	},
	mysql: {
		desc: "MySQL command-line client",
		flags: {
			"-u": "username for login",
			"-p": "password (prompt if no value)",
			"-h": "host to connect to",
			"-P": "port number",
			"-D": "database to use",
			"-e": "execute statement and quit",
			"-B": "batch mode (tab-separated output)",
			"-s": "silent mode"
		}
	},
	mongosh: {
		desc: "MongoDB Shell",
		flags: {
			"--host": "server hostname and port",
			"--port": "server port",
			"--username": "authentication username",
			"--password": "authentication password",
			"--authenticationDatabase": "database for authentication",
			"--eval": "evaluate JavaScript code",
			"--quiet": "suppress startup messages"
		}
	},
	...HINTS_TIER1,
	...HINTS_TIER2,
};
