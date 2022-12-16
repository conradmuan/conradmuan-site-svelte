import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			strict: false,
			pages: 'docs',
			assets: 'docs'
		}),
		files: {
			lib: 'src/lib'
		},
		paths: {
			base: dev ? '' : '/conradmuan-site-svelte'
		}
	}
};

export default config;
