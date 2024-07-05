import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://giwan.github.io',
	base: 'fit-blog-test-plain',
	integrations: [mdx(), sitemap()],
});
