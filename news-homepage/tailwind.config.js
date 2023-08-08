/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			serif: ['Inter', 'Poppins'],
		},
		extend: {
			colors: {
				softOrange: 'hsl(35, 77%, 62%)',
				softRed: 'hsl(5, 85%, 63%)',
				offWhite: 'hsl(36, 100%, 99%)',
				neutral: {
					100: 'hsl(233, 8%, 79%)',
					200: 'hsl(236, 13%, 42%)',
					300: 'hsl(240, 100%, 5%)',
				},
			},
			screens: {
				'3xl': '1800px',
			},
		},
	},
	plugins: [],
};
