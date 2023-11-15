/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bkg: {
					main: 'hsl(222, 26%, 31%)',
					screen: 'hsl(224, 36%, 15%)',
					keypad: 'hsl(223, 31%, 20%)',
				},
				text: { 1: 'hsl(0, 0%, 100%)', 2: 'hsl(221, 14%, 31%)' },
				keys: {
					base: {
						bkg: 'hsl(30, 25%, 89%)',
						shadow: 'hsl(28, 16%, 65%)',
						hover: 'hsl(0, 0%, 100%)',
					},
					func: {
						bkg: 'hsl(225, 21%, 49%)',
						shadow: 'hsl(224, 28%, 35%)',
						hover: 'hsl(224, 51%, 76%)',
					},
					eql: {
						bkg: 'hsl(6, 63%, 50%)',
						shadow: 'hsl(6, 70%, 34%)',
						hover: 'hsl(6, 93%, 67%)',
					},
				},
			},
		},
	},
	plugins: [],
};
