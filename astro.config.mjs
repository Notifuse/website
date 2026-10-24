// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',

  // Astro 7 defaults to JSX whitespace rules (compressHTML: 'jsx'), which strip the
  // space between inline elements split across lines — "with <span>responsive</span>"
  // renders as "withresponsive". Restoring the HTML-aware behaviour keeps a single
  // space between inline elements everywhere, without {" "} patches per page.
  // https://docs.astro.build/en/guides/upgrade-to/v7/#new-default-whitespace-handling-compresshtml-jsx
  compressHTML: true,

  // /licence-features is the URL the Additional Use Grant in the LICENSE file points at, so
  // it has to keep resolving for as long as any v40 binary exists — which, with a four-year
  // Change Date, is a long time. Redirecting rather than serving keeps the pinned URL fixed
  // while the page it explains is free to move, be renamed, or be rewritten.
  redirects: {
    '/licence-features': '/pricing/self-hosted#features',
    '/fr/fonctionnalites-sous-licence': '/fr/tarifs/auto-heberge#features',
  },

  build: {
    assets: '_astro'
  }
});