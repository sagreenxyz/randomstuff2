# SAGreenXYZ App

A personal blog, portfolio, and knowledge base — built with **Astro** and deployed on GitHub Pages.

## Tech Stack

| Tool | Role |
|------|------|
| [Astro](https://astro.build) v6 | Static site generator (zero-JS by default) |
| [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) | MDX support — use components in Markdown |
| [@astrojs/rss](https://docs.astro.build/en/guides/rss/) | RSS feed generation |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Sitemap generation |
| [GitHub Pages](https://pages.github.com) | Static hosting |
| [GitHub Actions](https://github.com/features/actions) | CI/CD — build and deploy on push to `main` |

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

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

The site automatically deploys to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

To enable GitHub Pages:
1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**

The live site will be at `https://sagreenxyz.github.io/randomstuff2/`.

## License

MIT
