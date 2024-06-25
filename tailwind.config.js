/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		},
		extend: {
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
					Grayish_Violet: 'hsl(257, 7%, 63%)',
					Very_Dark_Blue: 'hsl(255, 11%, 22%)',
					Very_Dark_Violet: 'hsl(260, 8%, 14%)',
				},
			},
			backgroundImage: {
				bgFormMobile: 'url("./src/assets/images/bg-shorten-mobile.svg")',
				bgFormDesktop: 'url("./src/assets/images/bg-shorten-desktop.svg")',
			},
		},
	},
	plugins: [],
};
