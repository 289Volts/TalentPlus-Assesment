import HeroSection from "@/components/Homepage/HeroSection";
import Head from "next/head";
import Image from "next/image";
import clashDisplay from "next/font/local";
import Clients from "@/components/Homepage/Clients";
import Features from "@/components/Homepage/Features";
import Benefits from "@/components/Homepage/Benefits";
import Courses from "@/components/Homepage/Courses";
import Testimonials from "@/components/Homepage/Testimonials";
import Community from "@/components/Homepage/Community";
import FAQs from "@/components/Homepage/FAQs";

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
				<title>Tech Time - TalentPlus Assessment</title>
				<meta name="description" content="This is an assessment given to frontend developers to test their skills and knowledge of good code structuree and performance." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeroSection clashDisplay={clashDisplayFont.className} />
			<Clients />
			<Features clashDisplay={clashDisplayFont.className} />
			<Benefits clashDisplay={clashDisplayFont.className} />
			<Courses clashDisplay={clashDisplayFont.className} />
			<Testimonials clashDisplay={clashDisplayFont.className} />
			<Community clashDisplay={clashDisplayFont.className} />
			<FAQs clashDisplay={clashDisplayFont.className} />
		</>
	);
}
