/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Nunito Sans', 'Roboto'],
		},
		extend: {
			colors: {
				bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
				text: 'hsl(var(--color-text) / <alpha-value>)',
				elements: 'hsl(var(--color-elements) / <alpha-value>)',
				input: 'hsl(var(--color-input) / <alpha-value>)',
			},
			boxShadow: {
				card: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
			},
		},
	},
	plugins: [],
};
