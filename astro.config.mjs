import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';
import vue from '@astrojs/vue';

// The bundled specs that `npm run sync` copied from stratastax-contract; without them the site is built
// without the API reference.
const specIndex = new URL('./public/openapi/index.json', import.meta.url);
const specs = existsSync(specIndex) ? JSON.parse(readFileSync(specIndex, 'utf8')) : [];

// The theme from stratastax-design, also copied by `npm run sync`; global.css falls back to its own values.
const designCss = ['./src/styles/design/tokens.css', './src/styles/design/starlight.css']
    .filter((file) => existsSync(new URL(file, import.meta.url)));

export default defineConfig({
  site: 'https://docs.stratastax.dev',
  integrations: [
      starlight({
          title: 'Stratastax',
          // banner: {
          //   content: '🚀 Stratastax is currently in active development. The web app is coming soon!',
          // },
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/buijs-dev/stratastax-horizon' }],
          plugins: specs.length === 0 ? [] : [
              starlightOpenAPI(specs.map((spec) => ({
                  base: `technical/api/${spec.name}`,
                  schema: `./public/openapi/${spec.file}`,
                  sidebar: { label: spec.title, operations: { badges: true } },
              }))),
          ],
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
              {
                  label: 'Technical',
                  items: [
                      { slug: 'technical' },
                      {
                          label: 'API',
                          items: [
                              { slug: 'technical/api' },
                              { label: 'Explorer', link: '/technical/api/explorer/' },
                              ...(specs.length === 0 ? [] : openAPISidebarGroups),
                          ],
                      },
                      {
                          label: 'Database',
                          items: [{ autogenerate: { directory: 'technical/database' } }],
                      },
                  ],
              },
          ],
          customCss: [...designCss, './src/styles/global.css'],
      }),
      vue(),
  ],
});
