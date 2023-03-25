/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				mobile: "375px",
			},
			colors: {
				primary: "#004DB3",
				clients: "#CCDBF0",
				heroText: "#E7E7E7",
				copy: "#A1A1A1",
				heading: "#000F24",
				tagBg: "rgba(30, 93, 206, 0.2)",
				tagText: "#1E5DCE",
				signUp: "#054FB3",
				footerBg: "#000F24",
				inactive: "#AAC4E6",
				bodyBg: "#F8F9FC",
				inputBg: "#2A2A2B",
				placeholder: "#424141",
				FAQBorder: "#EAEAEA",
				header: "rgba(255, 255, 255, 0.01)",
			},
			backgroundImage: {
				heroBg: "url('/assets/images/Hero-section/heroBg.svg')",
				featuresWave: "url('/assets/images/Features/wave.svg')",
				featuresEclipse: "url('/assets/images/Features/eclipse.svg')",
				featuresDot: "url('/assets/images/Features/dot.svg')",
				benefitsDot: "url('/assets/images/Benefits/dot.svg')",
				benefitsTriangle: "url('/assets/images/Benefits/triangle.svg')",
			},
			backdropBlur: {
				header: "20px",
			},
		},
	},
	plugins: [],
};
