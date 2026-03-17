---
title: 'Why I Chose Astro for This Site'
description: 'A breakdown of the static site generator options and why Astro won out for this personal blog and portfolio.'
pubDate: '2026-01-15'
tags: ['astro', 'ssg', 'web-development']
---

When starting this project, I evaluated several static site generators before landing on Astro. Here's my thinking.

## The Options

| Framework | Language | Strengths |
|-----------|----------|-----------|
| **Astro** | JS/TS | Modern, zero-JS default, any UI framework |
| **Next.js** | JS/TS | Full-stack, large ecosystem |
| **Hugo** | Go | Extremely fast builds, mature |
| **Jekyll** | Ruby | GitHub Pages native, simple |
| **Eleventy** | JS | Flexible, lightweight |

## Why Not Jekyll?

Jekyll is GitHub Pages' native framework, but it's Ruby-based and slower to iterate on. Astro gives me a more modern developer experience with TypeScript support out of the box.

## Why Not Next.js?

Next.js is fantastic for full-stack apps, but it's heavier than I need. While it supports static export (`output: 'export'`), the bundle size is larger and it's optimized for dynamic apps, not content sites.

## Why Astro?

1. **Zero JavaScript by default** — only ship JS for components that need it
2. **Content Collections** — type-safe frontmatter, great for blogs and knowledge bases
3. **MDX support** — use React/Astro components inside Markdown files
4. **Fast builds** — Vite-powered, very quick HMR
5. **Flexible** — can use React, Vue, Svelte, or plain HTML components

The combination of great content management, modern tooling, and GitHub Pages compatibility made Astro the clear winner.
