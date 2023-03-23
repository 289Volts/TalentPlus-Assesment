import Image from "next/image";
import React from "react";

const BenefitsCard = ({ src, heading, copy }) => {
	return (
		<div className="px-4 py-6 bg-white rounded-[4px]">
			<Image src={src} alt="" />
			<h2 className="capitalize mt-2 mb-1 font-bold text-[1.125rem]">{heading}</h2>
			<p className="text-sm text-copy font-medium">{copy}</p>
		</div>
	);
};

export default BenefitsCard;
