import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sagreenxyz.github.io',
  base: '/randomstuff2',
  integrations: [mdx(), sitemap()],
  output: 'static',
});
