import Image from "next/image";
import Link from "next/link";
import React from "react";
import mobileLinkArrow from "../../../public/assets/icons/mobileLinkArr.svg";
import faces from "../../../public/assets/images/faces.svg";
import mobileHeroImg from "../../../public/assets/images/mobileHeroImg.png";
import wavyArrow from "../../../public/assets/images/wavyArrow.png";
import EnrollNow from "../EnrollNow";

const HeroSection = ({ clashDisplay }) => {
	return (
		<section className="bg-primary bg-heroBg bg-cover bg-no-repeat text-white">
			<div className="w-[90%] mx-auto pt-[6rem]">
				<div className="flex flex-col items-center text-center">
					<div className="">
						<h1 className={`text-[2rem] font-bold leading-[1.4] ${clashDisplay}`}>
							Grow your skills to advance your career path{" "}
						</h1>
						<p className="mb-4">
							Build your future with our quality education. the best and largest all-in-one online tutoring platform in
							the world
						</p>
					</div>
					<div className="flex items-center gap-[0.84rem] mb-4">
						<Link href="#" className="flex w-[fit-content] py-[0.4375rem] px-4 border border-white rounded-[2px]">
							<span className="">Get Started Now</span>
							<Image src={mobileLinkArrow} alt="" />
						</Link>
						<EnrollNow url="/" classes="py-2 px-4" />
					</div>
					<div className="flex gap-2 mb-[3rem] text-left">
						<Image src={faces} alt="previews" />
						<div className={`${clashDisplay} flex flex-col`}>
							<span className="font-bold text-[1.1rem] leading-[1]">250+</span>
							<span className="font-medium text-[0.75rem]">Previews</span>
						</div>
					</div>
				</div>
				<div className="relative">
					<Image src={mobileHeroImg} alt="hero image" />
					<Image className="absolute right-[0.5rem] top-[-7rem] w-[16%]" src={wavyArrow} alt="hero image" />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
