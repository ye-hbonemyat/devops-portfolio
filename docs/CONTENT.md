# Content maintenance

- Central identity and contact details: `src/config/site.ts`
- Case study content: `src/data/caseStudies.ts`
- Homepage services and technology groups: `src/pages/index.astro`
- Packaged consulting services: `src/pages/services.astro`
- Experience timeline: `src/pages/about.astro`
- Planned lab projects: `src/pages/lab.astro`

## Content rules

Keep outcomes traceable to approved facts. Do not add client topology, scale, recovery target values, account structure, spend or customer details. Present unverified material as general methodology, never as professional history.

## Adding a case study

Add one object matching the `CaseStudy` interface in `src/data/caseStudies.ts`. Astro automatically creates its detail page. Use a stable lowercase slug, a verified outcome, explicit constraints and a sanitized workflow. Run `npm run check` afterward.

## Resume

The source `resume.pdf` was copied unchanged to `public/resume/ye-hbone-myat-resume.pdf`. Review the public copy for personal information before deployment. Replace that file in place to preserve links.
