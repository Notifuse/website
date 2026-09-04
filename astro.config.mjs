// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',

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