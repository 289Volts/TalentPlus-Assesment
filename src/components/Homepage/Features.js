import Image from "next/image";
import React from "react";
import AltLink from "../AltLink";
import crown from "../../../public/assets/images/Features/crown.svg";
import MobileFeaturesImg from "../../../public/assets/images/Features/mobileFeaturesImg.svg";
import desktopFeaturesImg from "../../../public/assets/images/Features/desktopFeaturesImg.svg";
import MobileAudio from "../../../public/assets/images/Features/MobileAudio.svg";
import MobileLive from "../../../public/assets/images/Features/MobileLive.svg";
import MobileRecord from "../../../public/assets/images/Features/MobileRecord.svg";
import MobileNote from "../../../public/assets/images/Features/MobileNote.svg";
import FeaturesStrip from "./FeaturesStrip";

const Features = ({ clashDisplay }) => {
	const features = [
		{
			id: 1,
			label: "Audio Classes",
			src: MobileAudio,
		},
		{
			id: 2,
			label: "Live Classes",
			src: MobileLive,
		},
		{
			id: 3,
			label: "Recorded Classes",
			src: MobileRecord,
		},
		{
			id: 4,
			label: "50+ New",
			src: MobileNote,
		},
	];

	return (
		<section id="features" className="py-[2.5rem] features md:pt-[5rem]">
			<div className="w-[90%] mx-auto md:flex md:justify-between gap-[2rem] lg:w-[87%] lg:items-center">
				<div className="md:text-left text-center lg:w-[80%] xl:w-[60%]">
					<h2
						className={`${clashDisplay} font-bold text-[1.5rem] text-heading mb-2 leading-[1.7] relative w-[fit-content] mx-auto lg:mx-0 lg:text-[2rem] xl:text-[3.5rem] lg:leading-[1.2]`}
					>
						High quality video, audio & live classes
						<Image src={crown} alt="" className="absolute left-[-3%] top-[-1rem] md:left-[-5.5%] lg:left-[-4.5%]" />
					</h2>
					<p className="text-copy mb-4 text-sm mobile:text-base">
						High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
						no standard meaning for high definition, generally any standard video image
					</p>
					<AltLink
						label="View Courses"
						url="/#courses"
						classes="py-3 px-6 bg-primary text-white rounded-[3px] mx-auto text-sm md:mx-0"
					/>

					<div className="flex flex-col mobile:flex-row flex-wrap items-center gap-[0.875rem] mx-auto mt-6 mb-[2.5rem] features-strip lg:w-[80%] lg:mb-0 lg:mx-0">
						{features.map(({ src, label, id }) => (
							<FeaturesStrip
								src={src}
								label={label}
								key={label}
								classes={`${
									id === 1 ? "mobile:w-[48%]" : id === 3 ? "mobile:w-[56%]" : id === 2 ? "lg:w-[45%]" : "flex-1"
								} w-full mobile:w-auto`}
							/>
						))}
					</div>
				</div>
				<div className="features-image lg:w-[70%] lg:translate-x-[-5rem">
					<Image src={MobileFeaturesImg} alt="" className="w-[100%] mx-auto md:hidden" />
					<Image src={desktopFeaturesImg} alt="" className="w-[100%] mx-auto hidden md:block" />
				</div>
			</div>
		</section>
	);
};

export default Features;
