import Image from "next/image";
import React from "react";
import mobileBenefitsImg from "../../../public/assets/images/Benefits/mobileBenefitsImg.png";
import desktopBenefitsImg from "../../../public/assets/images/Benefits/desktopBenefitsImg.png";
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
		<section className="py-[2.5rem] md:pt-[5rem] benefits">
			<div className="w-[90%] mx-auto lg:w-[87%] md:flex justify-between items-center">
				<div className="text-center md:text-left md:w-[35%] xl:w-[40%]">
					<h2
						className={`${clashDisplay} capitalize font-bold text-[1.5rem] text-heading mb-2 leading-[1.3] relative md:text-[2rem] lg:text-[2rem] `}
					>
						this is why we are best from others
					</h2>
					<p className="text-copy">
						High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
						no standard meaning for high definition, generally any standard video image
					</p>
					<Image src={mobileBenefitsImg} alt="" className="mt-6 mb-8 md:hidden" />
					<Image src={desktopBenefitsImg} alt="" className="mt-6 mb-8 md:mb-0 hidden md:block w-[100%]" />
				</div>
				<div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:w-[60%] xl:w-[50%]">
					{benefits.map(({ src, heading, id, copy }) => (
						<BenefitsCard src={src} heading={heading} key={id} copy={copy} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Benefits;
