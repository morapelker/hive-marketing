# Frequently Asked Questions (FAQ)

## General Questions

### What is Hive?
Hive is a native application that combines git worktree management with AI-powered coding assistance. It allows you to work on multiple branches simultaneously without the hassle of stashing and switching.

### Is Hive free?
Yes, Hive is free and open source under the MIT license.

### Which platforms does Hive support?
Hive supports macOS and Windows.

### Do I need to know git worktrees to use Hive?
No! Hive handles all the worktree complexity for you. If you can use git branches, you can use Hive.

## Installation & Setup

### How do I install Hive?
The easiest way is via Homebrew:
```bash
brew tap morapelker/hive
brew install --cask hive
```

Alternatively, download the `.dmg` file from [GitHub Releases](https://github.com/morapelker/hive/releases).

### How do I update Hive?
If installed via Homebrew:
```bash
brew upgrade hive
```

Otherwise, download the latest version from GitHub Releases.

## Git & Worktrees

### What is a git worktree?
A worktree is a linked working copy of your repository. Think of it as having multiple copies of your repo, each on different branches, without duplicating the entire `.git` history.

### Where does Hive store worktrees?
By default, worktrees are stored in:
```
~/.hive-worktrees/{project-name}/{worktree-name}
```

### Can I use existing worktrees?
Yes, if you have existing git worktrees, Hive will detect and manage them.

### What happens when I archive a worktree?
Archiving a worktree:
- Removes it from the active list
- Preserves the branch
- Moves files to `~/.hive-archive`
- Keeps session history searchable

### Can I delete branches through Hive?
Yes, use the "Unbranch" option to remove both the worktree and its associated branch.

### Why do worktrees have unique names?
Hive uses dog and cat breed names to make worktrees memorable and fun. It's easier to remember "the Labrador worktree" than "feature/user-auth-refactor-v2". You can change the naming scheme in settings.

## Connections

### What is the Connections feature?
Hive's Connections feature allows you to link multiple worktrees together, creating bridges between different branches. This enables you to reference code from other branches while working, share AI session context, and maintain awareness of related changes across your project.

### Why would I connect worktrees?
Common scenarios include:
- Keeping your main branch visible while working on features
- Comparing different implementations side-by-side
- Working on related frontend and backend branches simultaneously
- Sharing AI session context between branches
- Reviewing changes with full context from multiple branches
- Ensuring compatibility between branches during development

### How do I connect two worktrees?
1. Open the first worktree
2. Click the Connections icon (🔌) in the toolbar
3. Select "Connect to"
4. Choose the worktree you want to connect to
5. The connection is established immediately

### Can I connect more than two worktrees?
Yes! You can connect as many worktrees as you need. There's no limit on the number of connections.

### Do connections persist after closing Hive?
Yes! Connections are saved and will be restored when you reopen Hive. You can also save connection patterns as templates for quick reuse.

## AI Coding Sessions

### Which AI providers does Hive support?
- **OpenCode SDK** - Default provider with full features
- **Claude Code SDK** - Anthropic's Claude assistant
- **Codex** - OpenAI's Codex coding assistant

## Getting Help

### Where can I report bugs?
[Create an issue](https://github.com/morapelker/hive/issues) on GitHub with:
- Steps to reproduce
- Expected vs actual behavior
- System information
- Screenshots if applicable

### How can I request features?
[Open a discussion](https://github.com/morapelker/hive/discussions) or [create a feature request](https://github.com/morapelker/hive/issues/new?template=feature_request.md).

### Where can I find more documentation?
- [User Guide](GUIDE.md) - Detailed usage instructions
- [Changelog](changelog/) - Latest updates and changes
- [Contributing](../CONTRIBUTING.md) - How to contribute

### How can I contribute?
See our [Contributing Guidelines](../CONTRIBUTING.md). We welcome:
- Bug fixes
- Feature additions
- Documentation improvements
- Translations

### Is there a community Discord/Slack?
Not yet, but join our [GitHub Discussions](https://github.com/morapelker/hive/discussions) to connect with other users.

---

Still have questions? [Open a discussion](https://github.com/morapelker/hive/discussions/new?category=q-a) and we'll help!
