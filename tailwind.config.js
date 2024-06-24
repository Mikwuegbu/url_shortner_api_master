/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1440px',
		},
		colors: {
			Primary: {
				cyan: 'hsl(180, 66%, 49%)',
				darkViolet: ' hsl(257, 27%, 26%)',
			},
			Secondary: {
				red: 'hsl(0, 87%, 67%)',
			},
			Neutral: {
				Gray: 'hsl(0, 0%, 75%)',
				'Grayish Violet': 'hsl(257, 7%, 63%)',
				'Very Dark Blue': 'hsl(255, 11%, 22%)',
				'Very Dark Violet': 'hsl(260, 8%, 14%)',
			},
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
