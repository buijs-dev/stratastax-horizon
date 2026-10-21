import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// stratastax.dev: the product site. The documentation is docs.stratastax.dev (stratastax-docs).
export default defineConfig({
  site: 'https://stratastax.dev',
  integrations: [vue()],
});
