/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-netlify'
// import adapter from '@sveltejs/adapter-node'


const config = {
	kit: {
    adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
