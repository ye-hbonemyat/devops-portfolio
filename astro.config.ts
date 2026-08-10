import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://example.com', // TODO: replace with the production domain.
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
