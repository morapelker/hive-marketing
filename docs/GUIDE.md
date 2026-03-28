# Hive User Guide

Welcome to Hive! This guide will help you get the most out of Hive's powerful features for managing git worktrees and AI-powered coding sessions.

## Table of Contents

- [Getting Started](#getting-started)
- [Core Concepts](#core-concepts)
- [Working with Projects](#working-with-projects)
- [Managing Worktrees](#managing-worktrees)
- [AI Coding Sessions](#ai-coding-sessions)
- [Build & Plan Mode](#build-plan-mode)
- [Session History](#session-history)
- [Run Scripts](#run-scripts)
- [Connections](#connections)
- [Git Operations](#git-operations)
- [Pull Requests](#pull-requests)
- [GitHub Comments](#github-comments)
- [Settings](#settings)
- [Keyboard Shortcuts](#keyboard-shortcuts)

## Getting Started

### First Launch

When you first open Hive, you'll see an empty project list. Let's add your first project!

1. Click the **"Add Project"** button
2. Navigate to any git repository on your machine
3. Select the repository folder and click "Open"

Hive will analyze your repository and display it in the sidebar.

### Understanding the Interface

Hive's interface is divided into three main areas:

- **Left Sidebar**: Projects and worktrees navigation
- **Main Pane**: Active worktree content, file viewer, or AI session
- **Right Panel**: File tree, git status, and other contextual tools

## Core Concepts

### Projects vs Worktrees

- **Project**: A git repository on your machine
- **Worktree**: An isolated working copy of a specific branch

Think of worktrees as parallel universes for your code — each one can have different branches checked out simultaneously without affecting others.

### Why Worktrees?

Traditional git workflow:
```bash
git stash
git checkout feature-branch
# Work on feature
git stash
git checkout main
git stash pop
```

With Hive worktrees:
- Click on the worktree for `feature-branch`
- Work on feature
- Click on the worktree for `main`
- Both remain exactly as you left them!

## Working with Projects

### Adding Projects

You can add projects in multiple ways:

1. **GUI Method**: Click "Add Project" button
2. **Drag and Drop**: Drag a git repository folder into Hive
3. **Command Palette**: Press `Cmd+K` and type "Add Project"

### Project Actions

Right-click on any project to:
- Open in Finder
- Open in Terminal
- Copy repository path
- Remove from Hive (doesn't delete files)
- View project settings

### Project Organization

Projects can be pinned for quick access and filtered for easy navigation.

## Managing Worktrees

### Creating a Worktree

1. Select a project
2. Click **"New Worktree"**
3. Choose an existing branch or create a new one
4. Hive automatically assigns a unique name from dog or cat breeds (e.g., "labrador", "persian", "beagle")

### Worktree Naming

Hive uses a clever naming system:
- Each worktree gets a unique dog or cat breed name (e.g., "labrador", "persian", "beagle")
- You can rename worktrees after creation

### Worktree Actions

- **Open**: Click to open the worktree in the main pane
- **Archive**: Safely remove the worktree while preserving the branch
- **Unbranch**: Remove the worktree and delete the branch
- **Terminal**: Open a terminal in the worktree directory
- **Copy Path**: Copy the worktree's file system path

### Archived Worktrees

Archived worktrees are moved to `~/.hive-archive` and can be:
- Restored later if needed
- Permanently deleted to free up space
- Searched in session history

## AI Coding Sessions

### Starting a Session

1. Open a worktree
2. Click **"New Session"**
3. Choose your AI provider:
   - **OpenCode**: Full-featured with undo/redo support
   - **Claude Code**: Anthropic's coding assistant

### During a Session

#### Giving Instructions
Type your request in the chat input. Be specific about what you want:
- ✅ "Add a dark mode toggle to the settings page"
- ❌ "Make it better"

#### Tool Permissions
When the AI needs to perform actions, you'll see permission requests:
- **Read files**: Allow the AI to read specific files
- **Write files**: Allow modifications to files
- **Run commands**: Execute terminal commands

Always review what the AI wants to do before approving!

#### Undo/Redo
- **OpenCode**: Full undo/redo support with `Cmd+Z` / `Cmd+Shift+Z`
- **Claude Code**: Undo only (rewind to previous state)

## Build & Plan Mode

Hive offers two distinct modes for working with AI coding assistants:

### Build Mode
In Build mode, the AI actively writes and modifies code:
- Creates and edits files
- Runs commands
- Makes structural changes
- Implements features

### Plan Mode
In Plan mode, the AI acts as a consultant:
- Suggests approaches without modifying code
- Provides architectural guidance
- Answers questions
- Reviews existing code

### Switching Modes
Press **Tab** to toggle between Build and Plan modes at any time. The current mode is displayed in the chat interface.

### When to Use Each Mode
- **Use Build** when you want the AI to implement changes
- **Use Plan** when you need guidance before committing to changes
- **Switch freely** as your needs change during a session

## Session History

Access all your past AI coding sessions with Session History.

### Opening Session History
Press **`Cmd+K`** to open the Session History panel, which shows:
- All past sessions organized by date
- Session summaries and titles
- Worktree and project context
- Search and filter options

### Searching Sessions
- Type to search across all session content
- Filter by project, worktree, or date
- View session transcripts
- Resume archived sessions

### Benefits
- Reference past solutions
- Track your coding journey
- Learn from previous AI interactions
- Resume unfinished work

## Run Scripts

Execute project scripts directly from Hive with the Run feature.

### Setting Up Run Scripts
1. Open Settings (`Cmd+,`)
2. Navigate to your project settings
3. Define your run script (e.g., `npm start`, `python app.py`)

### Running Your Project
- Press **`Cmd+R`** to start or stop the run script
- Output appears in the integrated terminal
- The run button shows current status (running/stopped)

### Use Cases
- Development servers
- Watch modes
- Test runners
- Build processes

## Connections

Hive's Worktree Connections feature allows you to link multiple worktrees together, creating powerful workflows for development across multiple branches.

### Understanding Worktree Connections

Worktree connections create bridges between branches, allowing you to:
- View and reference code from another branch while working
- Share AI session context across branches
- Compare implementations side-by-side
- Maintain awareness of related changes

### Creating Your First Connection

1. Open a worktree (your "source")
2. Click the **Connections** icon (🔌) in the toolbar
3. Select **"Connect to"**
4. Choose the target worktree from the list
5. The connection is established immediately

You can connect as many worktrees as you need - there's no limit on the number of connections.

### Best Practices

1. **Connect Related Work** - Link branches that share context
2. **Maintain Main Connection** - Keep main branch connected for reference
3. **Clean Up Stale Connections** - Disconnect archived worktrees

## Git Operations

### Viewing Changes

The git panel shows:
- Staged changes
- Unstaged changes
- Untracked files

Click any file to see its diff.

### Committing Changes

1. Stage files by clicking the "+" icon
2. Enter a commit message (press `Cmd+Shift+C` to focus the commit form)
3. Click "Commit" or press `Cmd+Enter` when in the message field

### Branch Operations

- **Create Branch**: Right-click on worktree → "New Branch"
- **Switch Branch**: Not needed! Each worktree has its own branch
- **Merge**: Use the git panel or terminal
- **Push**: Press `Cmd+Shift+P` or use the git panel
- **Pull**: Press `Cmd+Shift+L` or use the git panel

### Viewing History

- Click "History" to see commit history
- Click any commit to see its changes
- Search history with `Cmd+F`

## Pull Requests

Create and manage pull requests directly from Hive.

### Creating a Pull Request

1. Make sure your changes are committed and pushed
2. Click the **"Create PR"** button in the git panel
3. Fill in the PR title and description
4. Select the target branch
5. Click "Create" to open the pull request on GitHub

### Review Button

When your worktree is linked to an existing pull request:
- The **"Review"** button appears in the toolbar
- Click it to view the PR on GitHub
- See comments, reviews, and CI status
- Sync changes back to your worktree

## GitHub Comments

When your worktree is linked to a pull request, Hive displays inline PR comments next to the relevant code, helping you stay in context while addressing feedback.

## Settings

Customize Hive to match your workflow.

### Opening Settings

Press **`Cmd+,`** or click the settings icon to open the settings panel.

### Key Settings

#### General
- **Theme**: Choose light or dark mode
- **Editor Font**: Customize code font and size
- **Worktree Names**: Choose between dog or cat breeds

#### AI Providers
- **OpenCode**: Configure OpenCode SDK settings
- **Claude Code**: Set up Anthropic API key
- **Codex**: Configure OpenAI Codex access
- **Default Provider**: Choose which AI to use by default

#### Git
- **Auto-fetch**: Automatically fetch from remote
- **Auto-push**: Push after every commit
- **Commit Signing**: Configure GPG signing

#### Run Scripts
- **Project Scripts**: Define run commands for each project
- **Environment Variables**: Set environment vars for scripts
- **Auto-run**: Run scripts automatically on worktree open

#### Keyboard Shortcuts
- Customize any keyboard shortcut
- Reset to defaults
- Export/import shortcut configurations

## Keyboard Shortcuts

### Essential Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+P` | Command Palette |
| `Cmd+K` | Session History |
| `Cmd+D` | Search Files |
| `Cmd+G` | Filter Projects |
| `Cmd+T` | New Session |
| `Cmd+Shift+N` | New Worktree |
| `Cmd+R` | Run/Stop Project Script |
| `Cmd+,` | Open Settings |
| `Tab` | Toggle Build/Plan Mode |
| `Alt+T` | Cycle Model Variant |

### Sidebar Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+B` | Toggle Left Sidebar |
| `Cmd+Shift+B` | Toggle Right Sidebar |
| `Cmd+1` | Focus Left Sidebar |
| `Cmd+2` | Focus Main Pane |

### Git Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+Shift+C` | Focus Commit Form |
| `Cmd+Shift+P` | Push to Remote |
| `Cmd+Shift+L` | Pull from Remote |

## Next Steps

Now that you understand the basics:

1. Set up your first project and create multiple worktrees
2. Try an AI coding session with a simple task
3. Experiment with Build and Plan modes
4. Connect related worktrees for better context
5. Customize settings to your preference
6. Explore keyboard shortcuts for speed

Happy coding with Hive! 🐝