import "@/styles/globals.css";
import satoshi from "next/font/local";
import clashDisplay from "next/font/local";
import Layout from "@/components/Layout/Layout";

const satoshiFont = satoshi({
	src: [
		{
			path: "./fonts/Satoshi/Satoshi-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Satoshi/Satoshi-medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/Satoshi/Satoshi-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./fonts/Satoshi/Satoshi-Black.otf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-satoshi",
});

const clashDisplayFont = clashDisplay({
	src: [
		{
			path: "./fonts/Clash Display/ClashDisplay-Semibold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./fonts/Clash Display/ClashDisplay-Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-clashDisplay",
});

export default function App({ Component, pageProps }) {
	return (
		<Layout clashDisplay={clashDisplayFont.className} satoshi={satoshiFont.className}>
			<Component {...pageProps} />
		</Layout>
	);
}
