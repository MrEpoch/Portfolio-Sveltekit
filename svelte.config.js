import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.mdx']
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', '.mdx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			components: './src/components',
			lib: './src/lib',
			assets: './src/assets',
			types: './src/types',
			images: './src/images'
		},
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self'],
				'script-src': [
					'self',
					'https://hcaptcha.com',
					'https://*.hcaptcha.com',
					'https://js.hcaptcha.com'
				],
				'style-src': ['self', 'unsafe-inline', 'https://*.hcaptcha.com', 'https://hcaptcha.com'],
				'connect-src': ['self', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
				'frame-src': ['self', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
				'font-src': ['self', 'data:']
			},
			reportOnly: {
				'style-src': ['self', 'unsafe-inline', 'https://*.hcaptcha.com', 'https://hcaptcha.com'],
				'connect-src': ['self', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
				'frame-src': ['self', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
				'script-src': ['self', 'https://hcaptcha.com', 'https://*.hcaptcha.com'],
				'report-uri': ['/']
			}
		}
	}
};

export default config;
