/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {},
	},
	plugins: [
		require("@catppuccin/tailwindcss"),
		require('flowbite/plugin'),
		require("@designbycode/tailwindcss-text-stroke"),
	],
}
