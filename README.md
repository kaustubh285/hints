# Hints - Smart Terminal Command Assistant

> Get intelligent hints for terminal commands as you type them. Like IntelliSense for your shell!

{Partially vibe coded}

## 🚀 What it does

Hints provides **real-time explanations** for terminal commands and their flags. Instead of googling "what does `docker exec -it` do?", just press **Ctrl+H** and get instant help.

## ✨ Features

- **🎯 Manual Trigger**: Press `Ctrl+H` while typing to see hints
- **📚 Comprehensive Database**: 50+ commands with detailed flag explanations  
- **🔍 Smart Parsing**: Understands combined flags like `-la`, subcommands like `git commit`
- **🎨 Beautiful Output**: Clean, readable hints that don't clutter your terminal
- **⚡ Fast**: Cached parsing for instant responses

## 📦 Installation

```bash
# Install globally
npm install -g @dev_desh/hints

# Set up shell integration (adds Ctrl+H trigger)
hints install
source ~/.zshrc  # or restart terminal
```

## 🎯 Usage & Examples

### **Learning flags step by step:**

```bash
$ ls -a
  -a - include hidden files (.*)
 Try: -l (detailed list)  -h (readable sizes)
```

```bash
$ ls -ah
  -a - include hidden files (.*)
  -h - human-readable sizes (1K, 5M)
 Try: -l (detailed list)  -t (newest first)
```

```bash
$ ls -ahl
  -a - include hidden files (.*)
  -h - human-readable sizes (1K, 5M)
  -l - long format (permissions, owner, size, date)
 Try: -t (newest first)  -R (recursive directory listing)
```

### **Docker commands made easy:**

```bash
$ docker exec -it container bash
 exec - Execute command in running container
  -i - interactive (keep STDIN open)
  -t - allocate pseudo-TTY
 Try: -u (specify user)  -w (working directory)
```

### **Git workflow assistance:**

```bash
$ git commit -am "fix bug"
 commit - Record changes to repository
  -a - automatically stage all modified files
  -m - commit message
 Try: --amend (modify last commit)  -v (show diff)
```

### **Database commands:**

```bash
$ psql -U postgres -d myapp
 psql - PostgreSQL interactive terminal
  -U - database username
  -d - database name to connect to
 Try: -h (database server host)  -p (server port)
```

## 📋 Supported Commands

### 🗂️ File & Navigation (10 commands)
- `ls`, `cd`, `pwd`, `mkdir`, `rm`, `mv`, `cp`, `find`

### 🌿 Git (7 commands)  
- `git`, `commit`, `push`, `pull`, `branch`, `status`, `log`

### 🐳 Docker (8 commands)
- `docker`, `run`, `exec`, `ps`, `build`, `logs`, `stop`, `images`

### 📦 Package Managers (3 commands)
- `npm`, `install`, `start`

### 🗄️ Database Tools (3 commands)
- `psql`, `mysql`, `mongosh`

### ⚙️ System & Process (5 commands)
- `kill`, `pgrep`, `pkill`, `grep`

## 🔧 Commands

```bash
hints explain <command>     # Explain any command directly
hints install              # Install shell integration (Ctrl+H)
hints uninstall            # Remove shell integration
hints status               # Check installation status
hints cleanup              # Clean up after uninstall
```

## 🎨 How it works

1. **Type your command**: Start typing any supported command
2. **Press Ctrl+H**: See instant explanations for your flags
3. **Learn as you go**: Discover new flags with helpful suggestions
4. **Build confidence**: Understand what each flag does before running

## 🛠️ Development

```bash
git clone <repo>
cd hints
bun install
bun run build
bun run link
```

## 📝 Contributing

Have ideas for new commands or better explanations? PRs welcome!

## 📄 License

MIT License - feel free to use this in your projects!
