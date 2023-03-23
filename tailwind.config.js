/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#004DB3",
				clients: "#CCDBF0",
				tag: "rgba(30, 93, 206, 0.2)",
				signUp: "#054FB3",
				footer: "#000F24",
				inactive: "#AAC4E6",
			},
			backgroundImage: {
				heroBg: "url('/assets/images/heroBg.svg')",
			},
		},
	},
	plugins: [],
};
