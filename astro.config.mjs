// @ts-check
import { defineConfig } from 'astro/config';

import node from "@astrojs/node";
import clerk from "@clerk/astro";
import tailwindcss from '@tailwindcss/vite';
import { esES } from '@clerk/localizations';

// https://astro.build/config
export default defineConfig({
  integrations: [clerk({
    localization: esES
  })],
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: node({ mode: "standalone" }),
  output: "server",
});