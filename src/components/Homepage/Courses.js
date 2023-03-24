import React from "react";

const Courses = ({ clashDisplay }) => {
	return (
		<section className="">
			<div className="w-[90%] mx-auto">
				<h2
					className={`${clashDisplay} capitalize font-bold text-[1.5rem] text-featuresHeading mb-2 leading-[1.7] relative w-[fit-content] mx-auto px-5`}
				>
					this is why we are best from others
				</h2>
				<p className="text-featuresCopy">
					High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
					no standard meaning for high definition, generally any standard video image
				</p>
			</div>
		</section>
	);
};

export default Courses;
