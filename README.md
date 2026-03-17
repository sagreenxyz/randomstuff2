# SAGreenXYZ App

A personal blog, portfolio, and knowledge base — built as a static site deployed on GitHub Pages.

## Tech Stack

This project targets frameworks that support **static site generation (SSG)** compatible with GitHub Pages:

- **Recommended:** [Astro](https://astro.build), [Next.js](https://nextjs.org) (static export), [Hugo](https://gohugo.io), [Jekyll](https://jekyllrb.com), or [Eleventy](https://www.11ty.dev)
- Deployment target: `gh-pages` branch via GitHub Actions

> ⚠️ GitHub Pages serves static files only. Server-side rendering (SSR) and dynamic API routes are **not** supported. Dynamic features (search, auth) must be handled client-side or via third-party services.

## Project Milestones

| Milestone | Description |
|-----------|-------------|
| M1 - Project Foundation | Repo setup, tech stack, CI/CD, GitHub Pages configuration |
| M2 - Core Blog | Blog posts, markdown, tagging, RSS feed |
| M3 - Portfolio | Project showcase, case studies, media gallery |
| M4 - Knowledge Base | Articles, search, hierarchy, internal linking |
| M5 - Auth & Admin | Owner login, admin dashboard, draft/publish workflow |
| M6 - Polish & Launch | SEO, performance, analytics, accessibility, go-live |

## Repository Setup

To initialize labels, milestones, and issues in this repository, run the **Setup Repository** workflow:

1. Go to **Actions → Setup Repository → Run workflow**
2. Type `setup` in the confirmation field and click **Run workflow**

For the GitHub Project board, see [`.github/setup/project-board-instructions.md`](.github/setup/project-board-instructions.md).

## Local Development

> Setup instructions will be added when the tech stack is finalized (M1).

## License

MIT
