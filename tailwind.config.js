/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#004DB3",
				clients: "#CCDBF0",
				heroText: "#E7E7E7",
				featuresCopy: "#A1A1A1",
				featuresHeading: "#000F24",
				tag: "rgba(30, 93, 206, 0.2)",
				signUp: "#054FB3",
				footerBg: "#000F24",
				inactive: "#AAC4E6",
				bodyBg: "#F8F9FC",
			},
			backgroundImage: {
				heroBg: "url('/assets/images/heroBg.svg')",
				featuresWave: "url('/assets/images/Features/wave.svg')",
				featuresEclipse: "url('/assets/images/Features/eclipse.svg')",
				featuresDot: "url('/assets/images/Features/dot.svg')",
			},
		},
	},
	plugins: [],
};
