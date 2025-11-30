import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mdolnicek.eu',
  srcDir: './src',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'cs', 'de', 'es', 'it', 'fr'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap()
  ]
});
