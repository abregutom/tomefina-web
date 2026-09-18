import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keep scripts as external files instead of inlining them into the HTML,
      // which would violate the strict `script-src 'self'` CSP in public/_headers.
      assetsInlineLimit: 0,
    },
  },
});
