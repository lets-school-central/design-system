import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { preprocessMeltUI } from '@melt-ui/pp';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess({}), preprocessMeltUI()],

	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib',
			'$lib/*': 'src/lib/*',
			$components: './src/lib/components',
			'$components/*': './src/lib/components/*',
			$internal: './src/lib/internal',
			'$internal/*': './src/lib/internal/*'
		}
	}
};

export default config;
