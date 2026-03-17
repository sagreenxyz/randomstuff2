---
title: 'Getting Started with GitHub Pages Deployment'
description: 'How to deploy an Astro site to GitHub Pages using GitHub Actions — including the workflow file and configuration.'
pubDate: '2026-02-01'
tags: ['github-pages', 'ci-cd', 'astro', 'deployment']
---

Deploying an Astro site to GitHub Pages is straightforward with GitHub Actions. Here's the setup I use on this site.

## Prerequisites

- An Astro project with `output: 'static'` in `astro.config.mjs`
- GitHub repository with Pages enabled (Settings → Pages → Source: GitHub Actions)

## Astro Configuration

In `astro.config.mjs`, set `site` and `base` so internal links work correctly on GitHub Pages:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
  output: 'static',
});
```

## GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## Enabling GitHub Pages

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow will build and deploy automatically

That's all it takes! Every push to `main` triggers a build and deploy.
