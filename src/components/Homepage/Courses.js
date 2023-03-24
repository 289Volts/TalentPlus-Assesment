import React from "react";
import Button from "../Button";
import { mobileCoursesData } from "../../../data/courses";
const Courses = ({ clashDisplay }) => {
	const tags = ["all categories", "design", "development", "marketing"];
	return (
		<section className="py-[2.5rem]">
			<div className="w-[90%] mx-auto text-center">
				<div className="">
					<h2
						className={`${clashDisplay} capitalize font-bold text-[1.5rem] text-featuresHeading mb-2 leading-[1.7] relative w-[fit-content] mx-auto px-5`}
					>
						browse our popular courses
					</h2>
					<p className="text-featuresCopy">
						High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
						no standard meaning for high definition, generally any standard video image
					</p>
				</div>
				<div className="mt-4">
					<div className="">
						<Button label="All categories" classes="font-bold text-sm" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Courses;
