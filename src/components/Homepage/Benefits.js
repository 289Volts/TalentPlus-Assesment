import Image from "next/image";
import React from "react";
import mobileBenefitsImg from "../../../public/assets/images/Benefits/mobileBenefitsImg.png";
import mobileMentors from "../../../public/assets/images/Benefits/mobileMentors.svg";
import mobileLearning from "../../../public/assets/images/Benefits/mobileLearning.svg";
import mobilePrices from "../../../public/assets/images/Benefits/mobilePrices.svg";
import mobileUsers from "../../../public/assets/images/Benefits/mobileUsers.svg";
import BenefitsCard from "./BenefitsCard";

const Benefits = ({ clashDisplay }) => {
	const benefits = [
		{
			id: 1,
			src: mobileMentors,
			heading: "experienced mentors",
			copy: "High-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition.",
		},
		{
			id: 2,
			src: mobileUsers,
			heading: "affordable prices",
			copy: "High-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition.",
		},
		{
			id: 3,
			src: mobilePrices,
			heading: "affordable prices",
			copy: "High-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition.",
		},
		{
			id: 4,
			src: mobileLearning,
			heading: "flexible learning",
			copy: "High-definition video is video of higher resolution and quality than standard definition. high-definition video is video of higher resolution and quality than standard definition.",
		},
	];

	return (
		<section className="py-[2.5rem]">
			<div className="w-[90%] mx-auto">
				<div className="text-center">
					<h2
						className={`${clashDisplay} capitalize font-bold text-[1.5rem] text-featuresHeading mb-2 leading-[1.7] relative w-[fit-content] mx-auto px-5`}
					>
						this is why we are best from others
					</h2>
					<p className="text-featuresCopy">
						High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
						no standard meaning for high definition, generally any standard video image
					</p>
					<Image src={mobileBenefitsImg} alt="" className="mt-6 mb-8" />
				</div>
				<div className="flex flex-col gap-4 ">
					{benefits.map(({ src, heading, id, copy }) => (
						<BenefitsCard src={src} heading={heading} key={id} copy={copy} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Benefits;
