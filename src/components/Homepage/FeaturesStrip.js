import Image from "next/image";
import React from "react";

const FeaturesStrip = ({ src, label, classes }) => {
	return (
		<div className={`bg-white py-2 px-4 flex items-center gap-2 rounded-[4px] ${classes}`}>
			<Image src={src} alt="" className="w-[24px] aspect-square" />
			<p className="font-bold text-heading text-[0.875rem]">{label}</p>
		</div>
	);
};

export default FeaturesStrip;
