import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://example.com',
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { port: 4321 },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
});
