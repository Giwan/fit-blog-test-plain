import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export const base = '/fit-blog-test-plain';

// https://astro.build/config
export default defineConfig({
	site: 'https://giwan.github.io',
	base,
	integrations: [mdx(), sitemap()],
});
