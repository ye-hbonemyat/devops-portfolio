# Deployment

## Recommended: Cloudflare Pages Git integration

1. Push this repository to GitHub (not performed by this project setup).
2. In Cloudflare, create a Pages project and connect the repository.
3. Set the production branch to `main`.
4. Use build command `npm run build` and output directory `dist`.
5. Cloudflare detects Node 22 from `.nvmrc`. If the dashboard overrides it, set `NODE_VERSION` to `22` or remove the conflicting override.
6. No application environment variables are required.
7. Replace `https://example.com` in `astro.config.ts`, `src/config/site.ts`, and `public/robots.txt` before production deployment.

Git integration is recommended for v1 because it provides preview deployments and avoids long-lived deployment credentials in GitHub.

## Optional: GitHub Actions with Wrangler

If deployment policy later requires GitHub-controlled releases, install Wrangler as a development dependency and use `cloudflare/wrangler-action`. Configure Cloudflare account and API token values as encrypted GitHub Actions secrets; never commit them. Build with `npm ci && npm run build`, then deploy `dist` to the chosen Pages project.

This workflow is intentionally not enabled until the Cloudflare account, Pages project name and credential strategy are approved.

## Custom domain

In the Pages project, open **Custom domains**, add the chosen hostname and follow Cloudflare's DNS prompts. If the domain already uses Cloudflare DNS, the Pages record can be created in the same zone. Verify TLS and redirect the unused `www` or apex variant to the canonical host.

## Production verification

- Check `/`, all primary routes, one case study, `/robots.txt` and `/sitemap-index.xml`.
- Confirm the canonical and social image URLs use the production domain.
- Validate security headers and the resume download.
- Run Lighthouse on mobile and desktop.

## Privacy-friendly analytics

Start without analytics. If business decisions later require traffic data, Cloudflare Web Analytics is the simplest privacy-oriented option. Document the data collected and update the Content Security Policy before adding any script.
