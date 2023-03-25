import Image from "next/image";
import React from "react";

const TestimonialCard = ({ src, tutor, role }) => {
	return (
		<div className="px-4 py-6 bg-white flex flex-col gap-4 rounded-3xl">
			<p className="text-copy text-sm">
				High-defination video is video of higher resolution and quality than standard definition. high-defination video
				is video of higher resolution and quality than standard definition. hbuild your future with our quality
				education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination
				video is video of higher resolution and quality than standard definition. build your future with our quality
				education. the best and largest all-in-one online tutoring platform in the world
			</p>
			<div className="flex gap-2">
				<Image src={src} alt="" className="" />
				<div className="capitalize">
					<h3 className="font-bold">{tutor}</h3>
					<p className="font-bold text-sm text-copy">{role}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
