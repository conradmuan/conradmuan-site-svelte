import fse from 'fs-extra';
import path from 'node:path';
import { sveltekit } from '@sveltejs/kit/vite';
import mkcert from 'vite-plugin-mkcert';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
	// copies uploaded files to the build directory if in dev mode
	if (command === 'serve') {
		const srcDir = path.resolve(process.cwd(), 'static/images');
		const destDir = path.resolve(process.cwd(), 'build/client/images');
		fse.copySync(srcDir, destDir, { overwrite: true });
	}

	return {
		server: { https: true },
		plugins: [sveltekit(), mkcert()]
	};
});
