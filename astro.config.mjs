import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [
      starlight({
          title: 'Stratastax',
          banner: {
            content: '🚀 Stratastax is currently in active development. The web app is coming soon!',
          },
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/buijs-dev/stratastax-horizon' }],
          sidebar: [
              {
                  label: 'Design',
                  items: [{autogenerate: {directory: 'design'}}]
              },
              {
                  label: 'Development',
                  items: [{autogenerate: { directory: 'development' }}]
              },
              {
                  label: 'Product',
                  items: [{autogenerate: { directory: 'product' }}]
              },
          ],
          customCss: ['./src/styles/global.css'],
      }),
      vue(),
  ],
});