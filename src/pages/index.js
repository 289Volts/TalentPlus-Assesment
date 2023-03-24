import HeroSection from "@/components/Homepage/HeroSection";
import Head from "next/head";
import Image from "next/image";
import clashDisplay from "next/font/local";
import Clients from "@/components/Homepage/Clients";
import Features from "@/components/Homepage/Features";
import Benefits from "@/components/Homepage/Benefits";
import Courses from "@/components/Homepage/Courses";

const clashDisplayFont = clashDisplay({
	src: [
		{
			path: "./fonts/Clash Display/ClashDisplay-Medium.otf",
			weight: "500",
			style: "normal",
		},
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
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeroSection clashDisplay={clashDisplayFont.className} />
			<Clients />
			<Features clashDisplay={clashDisplayFont.className} />
      <Benefits clashDisplay={clashDisplayFont.className} />
      <Courses clashDisplay={clashDisplayFont.className} />
		</>
	);
}
