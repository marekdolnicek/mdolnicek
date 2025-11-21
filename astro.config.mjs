import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://marekdolnicek.dev',
  srcDir: './src',
  output: 'static',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap()
  ]
});
