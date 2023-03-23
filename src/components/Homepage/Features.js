import Image from "next/image";
import React from "react";
import AltLink from "../AltLink";
import crown from "../../../public/assets/images/Features/crown.svg";
import wave from "../../../public/assets/images/Features/wave.svg";
import dot from "../../../public/assets/images/Features/dot.svg";
import eclipse from "../../../public/assets/images/Features/eclipse.svg";
import MobileFeaturesImg from "../../../public/assets/images/Features/MobileFeaturesImg.png";
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
		<section className="py-[2.5rem] features">
			<div className="w-[90%] mx-auto">
				<div className=" text-center">
					<h2
						className={`${clashDisplay} font-bold text-[1.5rem] text-featuresHeading mb-2 leading-[1.7] relative w-[fit-content] mx-auto px-5`}
					>
						High quality video, audio & live classes
						<Image src={crown} alt="" className="absolute left-[0] top-[-0.8rem]" />
					</h2>
					<p className="text-copy mb-4">
						High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
						no standard meaning for high definition, generally any standard video image
					</p>
					<AltLink
						label="View Courses"
						url="/"
						classes="py-3 px-6 bg-primary text-white rounded-[3px] mx-auto text-sm"
					/>

					<div className="flex flex-wrap items-center gap-[0.875rem] mx-auto mt-6 mb-[2.5rem] features-strip">
						{features.map(({ src, label, id }) => (
							<FeaturesStrip
								src={src}
								label={label}
								key={label}
								classes={`${id === 1 ? "w-[48%]" : id === 3 ? "w-[56%]" : "flex-1"}`}
							/>
						))}
					</div>
				</div>
				<div className="features-image">
					<Image src={MobileFeaturesImg} alt="" className="w-[100%] mx-auto" />
				</div>
			</div>
		</section>
	);
};

export default Features;
