/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {},
	plugins: [
		require('./plugin'),
	],
};

module.exports = config;
