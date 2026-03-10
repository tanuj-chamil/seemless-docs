// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
      mermaid(), // ⚠️ Must come BEFORE starlight
      starlight({
          title: 'Seemless Engine',
          description: 'The edge-native website engine. A Webflow alternative built on Cloudflare and Astro.',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/snap86' }],
          sidebar: [
              {
                  label: 'Introduction',
                  items: [
                      { label: 'What is Seemless?', slug: 'index' },
                      { label: 'Getting Started', slug: 'guides/getting-started' },
                  ],
              },
              {
                  label: 'Core Concepts',
                  items: [
                      { label: 'Architecture', slug: 'concepts/architecture' },
                      { label: 'Edge & Performance', slug: 'concepts/edge-performance' },
                  ],
              },
              {
                  label: 'Admin Dashboard',
                  items: [
                      { label: 'Overview', slug: 'dashboard/overview' },
                      { label: 'Content & Pages', slug: 'dashboard/content-pages' },
                  ],
              },
              {
                  label: 'Deployment',
                  items: [
                      { label: 'Deploying to Cloudflare', slug: 'deployment/cloudflare' },
                  ],
              },
          ],
      }),
	],

  adapter: cloudflare({
      platformProxy: {
          enabled: true
      },

      imageService: "cloudflare"
  }),
});