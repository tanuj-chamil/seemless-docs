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
                      { label: 'What is Seemless?', slug: 'index', badge: { text: 'Draft', variant: 'caution' } },
                      { label: 'Getting Started', slug: 'guides/getting-started', badge: { text: 'Draft', variant: 'caution' } },
                  ],
              },
              {
                  label: 'Core Concepts',
                  items: [
                      { label: 'Architecture', slug: 'concepts/architecture', badge: { text: 'Draft', variant: 'caution' } },
                      { label: 'Edge & Performance', slug: 'concepts/edge-performance', badge: { text: 'Draft', variant: 'caution' } },
                  ],
              },
              {
                  label: 'Admin Dashboard',
                  items: [
                      { label: 'Overview', slug: 'dashboard/overview', badge: { text: 'Draft', variant: 'caution' } },
                      { label: 'Content & Pages', slug: 'dashboard/content-pages', badge: { text: 'Draft', variant: 'caution' } },
                  ],
              },
              {
                  label: 'Deployment',
                  items: [
                      { label: 'Deploying to Cloudflare', slug: 'deployment/cloudflare', badge: { text: 'Draft', variant: 'caution' } },
                  ],
              },
              {
                  label: 'Components API',
                  items: [
                      {
                          label: 'Layout',
                          items: [
                              { label: 'Header', slug: 'reference/header', badge: { text: 'Draft', variant: 'caution' } },
                              { label: 'Header — Nav & Dropdowns', slug: 'reference/header-nav', badge: { text: 'Draft', variant: 'caution' } },
                              { label: 'Header — Search', slug: 'reference/header-search', badge: { text: 'Draft', variant: 'caution' } },
                              { label: 'Header — Scroll & Mobile', slug: 'reference/header-behavior', badge: { text: 'Draft', variant: 'caution' } },
                              { label: 'Footer', slug: 'reference/layout/footer', badge: { text: 'Draft', variant: 'caution' } },
                          ],
                      },
                      {
                          label: 'Sections',
                          items: [
                              { label: 'Hero', slug: 'reference/sections/hero', badge: { text: 'Draft', variant: 'caution' } },
                              { label: 'Features', slug: 'reference/sections/features', badge: { text: 'Draft', variant: 'caution' } },
                              { label: 'Pricing', slug: 'reference/sections/pricing', badge: { text: 'Draft', variant: 'caution' } },
                              { label: 'Testimonials', slug: 'reference/sections/testimonials', badge: { text: 'Draft', variant: 'caution' } },
                              { label: 'CTA Banner', slug: 'reference/sections/cta', badge: { text: 'Draft', variant: 'caution' } },
                          ],
                      },
                      {
                          label: 'UI Components',
                          items: [
                              { label: 'Button', slug: 'reference/ui/button', badge: { text: 'Draft', variant: 'caution' } },
                              { label: 'Card', slug: 'reference/ui/card', badge: { text: 'Draft', variant: 'caution' } },
                              { label: 'Badge', slug: 'reference/ui/badge', badge: { text: 'Draft', variant: 'caution' } },
                          ],
                      },
                      {
                          label: 'Forms',
                          items: [
                              { label: 'Form', slug: 'reference/forms/form', badge: { text: 'Draft', variant: 'caution' } },
                          ],
                      },
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