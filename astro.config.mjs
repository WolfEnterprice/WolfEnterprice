import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://wolfenterprice.com',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
    },
  },
});

