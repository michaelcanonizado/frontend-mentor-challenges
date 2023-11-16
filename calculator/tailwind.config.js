/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
						bkg: 'hsl(var(--color-keys-base-bkg))',
						shadow: 'hsl(var(--color-keys-base-shadow))',
						hover: 'hsl(var(--color-keys-base-hover))',
					},
					func: {
						bkg: 'hsl(var(--color-keys-func-bkg))',
						shadow: 'hsl(var(--color-keys-func-shadow))',
						hover: 'hsl(var(--color-keys-func-hover))',
					},
					eql: {
						bkg: 'hsl(var(--color-keys-eql-bkg)',
						shadow: 'hsl(var(--color-keys-eql-shadow))',
						hover: 'hsl(var(--color-keys-eql-hover))',
					},
				},
			},
		},
	},
	plugins: [],
};
