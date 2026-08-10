# Ye Hbone Myat — consulting portfolio

A static, consulting-focused portfolio for a Senior Cloud Infrastructure & DevOps Consultant. The site presents packaged services, sanitized engineering case studies, verified outcomes and a clear route to an email conversation.

## Stack

- Astro 7 with strict TypeScript and static output
- Tailwind CSS 4 through the Vite plugin
- Minimal client JavaScript; no React, database, CMS or form backend
- ESLint, Prettier, Astro type checking and a local-link validator
- GitHub Actions CI and Cloudflare Pages deployment readiness

## Requirements

- Node.js 22.12 or newer (Node 22 is declared in `.nvmrc` for local, CI and hosting builds)
- npm 10 or newer

With `mise` installed, run `mise exec node@22 -- npm install` and prefix later commands with `mise exec node@22 --` if the active shell still uses an older Node release.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Commands

```bash
npm run dev          # development server
npm run format       # format tracked source files
npm run format:check # verify formatting
npm run lint         # ESLint
npm run typecheck    # Astro and TypeScript checks
npm run build        # typecheck and static build
npm run check:links  # verify built internal links
npm run check        # complete local/CI validation
npm run preview      # serve the production build locally
```

## Content and configuration

Update contact details, profile links, canonical site URL and resume URL in `src/config/site.ts`. Unknown GitHub and LinkedIn URLs are `null`, so the UI does not render fake links. Replace all `https://example.com` placeholders before deployment; see `docs/DEPLOYMENT.md`.

Case studies live in `src/data/caseStudies.ts`. Adding a typed entry automatically creates a detail route through `src/pages/work/[slug].astro`. See `docs/CONTENT.md` for the content safety rules and editing map.

The public resume is `public/resume/ye-hbone-myat-resume.pdf`. It is an unchanged copy of the supplied `resume.pdf`; review its personal information before publishing.

## Architecture

```text
src/
├── components/       reusable layout and content components
├── config/           central identity/contact configuration
├── data/             typed case study content
├── layouts/          SEO and document shell
├── pages/            static routes and generated case studies
└── styles/           Tailwind theme and global styles
docs/                 deployment, security, content and lab plans
public/               favicon, social image, robots and resume
scripts/              build-output link validation
```

## CI/CD

GitHub Actions runs install, formatting, linting, type checking, build and internal-link checks for pull requests and pushes to `main`. Dependabot checks npm weekly and Actions monthly.

## Cloudflare Pages

The recommended v1 deployment is Cloudflare Pages Git integration:

- Build command: `npm run build`
- Output directory: `dist`
- Node: `22`
- Environment variables: none

Full Git integration, optional Wrangler workflow, domain and post-deployment instructions are in `docs/DEPLOYMENT.md`. Security header guidance is in `docs/SECURITY.md`; domain considerations are in `docs/DOMAIN.md`.

## Engineering Lab

`docs/LAB-ROADMAP.md` prioritizes future public repositories. Detailed, sanitized specifications are in `docs/plans/`. These are plans only; the website labels every lab item **Coming soon**.
