/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		fontFamily: {
			sans: ['Rubik'],
		},
		extend: {
			colors: {
				'primary-violet': ' hsl(246, 80%, 60%)',
				'primary-orange': ' hsl(15, 100%, 70%)',
				'primary-blue': 'hsl(195, 74%, 62%)',
				'primary-red': 'hsl(348, 100%, 68%)',
				'primary-green': 'hsl(145, 58%, 55%)',
				'primary-purple': 'hsl(264, 64%, 52%)',
				'primary-yellow': 'hsl(43, 84%, 65%)',
				neutral: {
					100: 'hsl(236, 100%, 87%)',
					200: 'hsl(235, 45%, 61%)',
					300: 'hsl(235, 46%, 20%)',
					400: 'hsl(226, 43%, 10%)',
				},
			},
		},
	},
	plugins: [],
};
