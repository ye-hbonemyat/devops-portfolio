# Security guidance

The site is statically generated and has no database, authentication, contact form, cookies or application secrets. Keep it that way unless a concrete requirement justifies more surface area.

## Recommended Cloudflare response headers

Configure these through a Pages `_headers` file or Transform Rules after testing on preview:

```text
/*
  Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; upgrade-insecure-requests
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
```

Astro emits small inline module and JSON-LD scripts, and Tailwind/Astro can emit inline styles. The policy above accommodates those. A nonce or hash-based CSP is stronger but needs deployment-aware generation; test before tightening. Only enable HSTS `includeSubDomains` when every subdomain supports HTTPS.

## Repository hygiene

- `.env*`, Wrangler state and logs are ignored.
- Do not commit cloud credentials, kubeconfigs, Terraform state, API tokens or employer material.
- Treat the public resume as intentionally internet-accessible and review it before every replacement.
- Dependabot covers npm and GitHub Actions updates. Review updates and run `npm run check` before merging.
- Use least-privilege, short-lived credentials if GitHub-based deployment is enabled later.

## Reporting

Until a public security policy is needed, report portfolio security concerns through the email in `src/config/site.ts`. Do not publish sensitive details in an issue.
