/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bkg: 'hsl(222, 26%, 31%)',
				keys: {
					bkg: 'hsl(225, 21%, 49%)',
					shadow: 'hsl(224, 28%, 35%)',
					accent: {
						1: 'hsl(6, 63%, 50%)',
						2: 'hsl(6, 70%, 34%)',
					},
				},
			},
		},
	},
	plugins: [],
};
