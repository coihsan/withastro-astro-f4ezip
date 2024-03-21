/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend:{
			colors:{
				onyx:{
					50: "#fafafa",
					100: "#f4f4f5",
					200: "#e4e4e7",
					300: "#BECEE8",
					400: "#95A1B6",
					500: "#7C8698",
					600: "#656D7B",
					700: "#18234A",
					800: "#0F162E",
					900: "#0c0f19",
					950: "#060913",
				},
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
			  '.dark': {
				'--tw-color-primary': '#000',
				'--tw-color-primary-light': '#222',
				'--tw-color-secondary': '#666',
				'--tw-color-secondary-light': '#888',
				'--tw-color-text': '#fff',
				'--tw-color-text-light': '#999',
				'--tw-color-background': '#000',
				'--tw-color-background-light': '#222',
				'--tw-color-border': '#000',
				'--tw-color-border-light': '#222',
			  },
			});
		}
	],
}
