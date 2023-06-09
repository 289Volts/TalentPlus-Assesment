import React from "react";
import Button from "../Button";
import { mobileCoursesData } from "../../../data/courses";
import CoursesCard from "./CoursesCard";
import AltLink from "../AltLink";
import Image from "next/image";
import blueStar from "../../../public/assets/images/Courses/blueStar.svg";
const Courses = ({ clashDisplay }) => {
	const [courses, setCourses] = React.useState(mobileCoursesData);
	const tags = ["all categories", "Design", "Development", "Marketing"];
	const [isMobile, setIsMobile] = React.useState(false);

	const [currentTag, setCurrentTag] = React.useState("all categories");

	const filterCourses = (tag) => {
		if (tag === "all categories") {
			setCourses(mobileCoursesData);
		} else {
			const filteredCourses = mobileCoursesData.filter((course) => course.tag === tag);
			setCourses(filteredCourses);
		}
		setCurrentTag(tag);
	};

	React.useEffect(() => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		}
	}, []);

	return (
		<section id="courses" className="py-[2.5rem] courses relative md:pt-[5rem]">
			<Image
				src={blueStar}
				alt="blue star"
				className="absolute top-[1.5rem] left-[1rem] md:top-[8%] md:left-[7%] md:w-[24px] lg:top-[13%] lg:left-[9%]"
			/>
			<div className="w-[90%] mx-auto text-center lg:w-[87%]">
				<div className="">
					<h2
						className={`${clashDisplay} capitalize font-bold text-[1.5rem] text-heading mb-2 relative md:text-[2rem] lg:text-[3.5rem]`}
					>
						browse our popular courses
					</h2>
					<p className="text-copy md:w-[70%] md:mx-auto text-sm mobile:text-base">
						High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
						no standard meaning for high definition, generally any standard video image
					</p>
				</div>
				<div className="mt-4">
					<div className="flex justify-between items-center gap-1 py-5 md:w-[78%] md:mx-auto lg:w-[60%] md:grid md:grid-cols-4 overflow-x-scroll mobile:overflow-x-auto">
						{tags.map((tag, i) => (
							<div key={tag} className="">
								<Button
									click={() => filterCourses(tag)}
									myKey={i}
									label={tag}
									classes={`font-bold text-xs capitalize px-2 py-2 rounded-[3px] ${""} w-[fit-content] ${
										currentTag === tag ? "text-primary px-3 py-2 bg-white md:px-4 md:py-3" : "text-copy"
									} md:text-base`}
								/>
							</div>
						))}
					</div>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{courses.map(
							({
								id,
								mobileSrc,
								desktopSrc,
								tutor,
								tutorImg,
								price,
								lessons,
								duration,
								clock,
								heading,
								star,
								tag,
								book,
							}) => (
								<CoursesCard
									mainImg={isMobile ? mobileSrc : desktopSrc}
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
							)
						)}
					</div>

					<div className="flex justify-center mt-6">
						<AltLink
							url="/"
							label={isMobile ? "View Courses" : "Explore All Courses"}
							classes="text-white bg-primary font-bold text-sm mt-6 py-2 px-4 rounded-[3px] md:text-base md:py-4 md:px-8"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Courses;
