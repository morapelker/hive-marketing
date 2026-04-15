import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hive',
  description: 'AI Agent Orchestrator for macOS - Manage git worktrees and AI coding sessions',
  lang: 'en-US',
  base: '/docs/',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/docs/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/docs/icon.png' }],
    ['meta', { name: 'theme-color', content: '#4ade80' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Hive — AI Agent Orchestrator' }],
    ['meta', { property: 'og:description', content: 'Run Claude Code, OpenCode, and Codex sessions in parallel across projects. One window. Isolated branches. Zero tab chaos.' }],
    ['meta', { property: 'og:image', content: 'https://hive-ai.dev/opengraph-image' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  transformHead(context) {
    const canonicalMap: Record<string, string> = {
      'index.md': 'https://hive-ai.dev/docs',
      'Docs.md': 'https://hive-ai.dev/docs',
      'GUIDE.md': 'https://hive-ai.dev/docs',       // dedup → same canonical as Docs
      'README.md': 'https://hive-ai.dev/docs/README',
      'FAQ.md': 'https://hive-ai.dev/docs/FAQ',
      'SHORTCUTS.md': 'https://hive-ai.dev/docs/SHORTCUTS',
      'changelog/index.md': 'https://hive-ai.dev/docs/changelog',
    };
    const canonical = canonicalMap[context.page];
    if (canonical) {
      return [['link', { rel: 'canonical', href: canonical }]];
    }
  },

  themeConfig: {
    logo: '/icon.png',
    siteTitle: 'Hive',
    logoLink: '../',

    nav: [
      { text: 'Docs', link: '/Docs' },
      { text: 'FAQ', link: '/FAQ' },
      { text: 'Changelog', link: '/changelog/' },
      {
        text: 'v1.0.78',
        items: [
          { text: 'GitHub Releases', link: 'https://github.com/morapelker/hive/releases' },
          { text: 'Contributing', link: 'https://github.com/morapelker/hive/blob/main/CONTRIBUTING.md' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/README' },
          { text: 'User Guide', link: '/GUIDE' },
          { text: 'FAQ', link: '/FAQ' }
        ]
      },
      {
        text: 'Core Concepts',
        items: [
          { text: 'Projects & Worktrees', link: '/GUIDE#core-concepts' },
          { text: 'AI Coding Sessions', link: '/GUIDE#ai-coding-sessions' },
          { text: 'Worktree Connections', link: '/GUIDE#connections' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Build & Plan Mode', link: '/GUIDE#build-plan-mode' },
          { text: 'Session History', link: '/GUIDE#session-history' },
          { text: 'Run Scripts', link: '/GUIDE#run-scripts' },
          { text: 'Git Operations', link: '/GUIDE#git-operations' },
          { text: 'Create Pull Requests', link: '/GUIDE#pull-requests' },
          { text: 'Settings', link: '/GUIDE#settings' }
        ]
      },
      {
        text: 'Updates',
        items: [
          { text: 'Changelog', link: '/changelog/' },
          { text: 'GitHub Releases', link: 'https://github.com/morapelker/hive/releases' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/morapelker/hive' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present morapelker'
    },

    editLink: {
      pattern: 'https://github.com/morapelker/hive/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  }
})
