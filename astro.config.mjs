// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import auth from 'auth-astro';

import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  // integrations: [auth()]
  output: 'server',

  integrations: [mdx(), react(), db()],
  adapter: netlify()
});