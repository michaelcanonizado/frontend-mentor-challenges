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
						1: 'hsl(30, 25%, 89%)',
						2: 'hsl(28, 16%, 65%)',
						3: 'hsl(0, 0%, 100%)',
					},
					func: {
						1: 'hsl(225, 21%, 49%)',
						2: 'hsl(224, 28%, 35%)',
						3: 'hsl(224, 51%, 76%)',
					},
					eql: {
						1: 'hsl(6, 63%, 50%)',
						2: 'hsl(6, 70%, 34%)',
						3: 'hsl(6, 93%, 67%)',
					},
				},
			},
		},
	},
	plugins: [],
};
