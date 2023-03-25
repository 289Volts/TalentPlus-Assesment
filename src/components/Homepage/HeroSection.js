import Image from "next/image";
import Link from "next/link";
import React from "react";
import mobileLinkArrow from "../../../public/assets/icons/MobileLinkArr.svg";
import faces from "../../../public/assets/images/Hero-section/faces.svg";
import desktopFaces from "../../../public/assets/images/Hero-section/desktopFaces.svg";
import mobileHeroImg from "../../../public/assets/images/Hero-section/MobileHeroImg.png";
import desktopHeroImg from "../../../public/assets/images/Hero-section/desktopHeroImg.png";
import wavyArrow from "../../../public/assets/images/Hero-section/wavyArrow.png";
import desktopWavyArrow from "../../../public/assets/images/Hero-section/desktopWavyArr.svg";
import EnrollNow from "../EnrollNow";

const HeroSection = ({ clashDisplay }) => {
	return (
		<section className="hero bg-heroBg bg-cover bg-primary text-white">
			<div className=" w-[90%] mx-auto pt-[6rem] text-center md:flex md:text-left md:justify-between md:items-end md:pt-[10rem] lg:items-center lg:w-[87%]">
				<div className="flex flex-col items-center md:items-start lg:w-[48%]">
					<div className="">
						<h1
							className={`text-[1.5rem] mobile:text-[2rem] font-bold leading-[1.4] ${clashDisplay} md:mb-4 lg:text-[2.5rem] lg:leading-[1.2] xl:text-[4rem]`}
						>
							Grow your skills to advance your career path{" "}
						</h1>
						<p className="mb-4 lg:mb-8 font-medium text-heroText text-sm mobile:text-base">
							Build your future with our quality education. the best and largest all-in-one online tutoring platform in
							the world
						</p>
					</div>
					<div className="flex items-center gap-[0.84rem] mb-4 lg:mb-6 text-sm mobile:text-base">
						<Link
							href="#"
							className="flex w-[fit-content] py-[0.4475rem] px-4 border border-white rounded-[2px] md:py-[11px] md:px-6"
						>
							<span className="">Get Started Now</span>
							<Image src={mobileLinkArrow} alt="" />
						</Link>
						<EnrollNow url="/" classes="py-2 px-4 md:py-3 md:px-6" />
					</div>
					<div className="flex gap-2 mb-[3rem] text-left">
						<Image src={faces} alt="previews" className="lg:hidden" />
						<Image src={desktopFaces} alt="previews" className="hidden lg:block" />
						<div className={`${clashDisplay} flex flex-col justify-center`}>
							<span className="font-bold text-[1.1rem] leading-[1] lg:text-[1.5rem]">250+</span>
							<span className="font-medium text-[0.75rem] lg:text-[1rem] text-heroText">Previews</span>
						</div>
					</div>
				</div>
				<div className="relative lg:w-[48%]">
					<Image src={mobileHeroImg} alt="hero image" className="lg:hidden" />
					<Image src={desktopHeroImg} alt="hero image" className="hidden lg:block" />
					<Image
						className="md:hidden absolute right-0 mobile:right-[0.5rem] top-[-7rem] w-[16%] md:top-[12rem] md:left-[-3rem]"
						src={wavyArrow}
						alt="hero image"
					/>
					<Image
						className="hidden md:block absolute right-[0.5rem] top-[-7rem] w-[16%] md:top-[12.5rem] md:left-[-2rem] lg:top-[60%] lg:left-[-2.5rem] xl:left-[-3.5rem]"
						src={desktopWavyArrow}
						alt="hero image"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
