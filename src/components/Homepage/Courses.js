import React from "react";
import Button from "../Button";
import { mobileCoursesData } from "../../../data/courses";
import CoursesCard from "./CoursesCard";
import AltLink from "../AltLink";
const Courses = ({ clashDisplay }) => {
	const [courses, setCourses] = React.useState(mobileCoursesData);
	const tags = ["all categories", "Design", "Development", "Marketing"];
	const [classList, setClassList] = React.useState("");

	const filterCourses = (tag) => {
		if (tag === "all categories") {
			setCourses(mobileCoursesData);
			return;
		}
		const filteredCourses = mobileCoursesData.filter((course) => course.tag === tag);
		setCourses(filteredCourses);
	};

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
				<div className="mt-4 ">
					<div className="flex justify-between py-5">
						{tags.map((tag, i) => (
							<Button
								click={() => filterCourses(tag)}
								myKey={i}
								key={tag}
								label={tag}
								classes={`font-bold text-xs capitalize px-2 py-2 rounded-[3px] ${classList}`}
							/>
						))}
					</div>
					<div className="grid gap-4">
						{courses.map(({ id, src, tutor, tutorImg, price, lessons, duration, clock, heading, star, tag, book }) => (
							<CoursesCard
								mainImg={src}
								tag={tag}
								starImg={star}
								heading={heading}
								clock={clock}
								duration={duration}
								lessons={lessons}
								book={book}
								price={price}
								tutor={tutor}
								tutorImg={tutorImg}
								key={id}
								clashDisplay={clashDisplay}
							/>
						))}
                    </div>
                    
                    <div className="flex justify-center">
                        <AltLink url="/" label="View Courses" classes="text-white bg-primary font-bold text-sm mt-6 py-2 px-4 rounded-[3px]" />
                    </div>
				</div>
			</div>
		</section>
	);
};

export default Courses;
