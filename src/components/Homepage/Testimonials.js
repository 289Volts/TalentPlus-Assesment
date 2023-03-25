import React from "react";

const Testimonials = ({ clashDisplay }) => {
	return (
		<section className="py-[2.5rem]">
			<div className="text-center w-[90%] mx-auto">
				<h2
					className={`${clashDisplay} capitalize font-bold text-[1.5rem] text-heading mb-2 leading-[1.7] relative w-[fit-content] mx-auto`}
				>
					what our clients are saying
				</h2>
				<p className="text-copy">
					High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
					no standard meaning for high definition, generally any standard video image
				</p>
			</div>
		</section>
	);
};

export default Testimonials;
