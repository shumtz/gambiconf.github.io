import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: staticAdapter(),
    vite: {
      optimizeDeps: {
        include: "debug"
      },
    },
		prerender: {
			default: true,
		},
  },

  experimental: {
    useVitePreprocess: true
  }
};

export default config;
