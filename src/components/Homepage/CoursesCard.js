import Image from "next/image";
import React from "react";

const CoursesCard = ({ mainImg, tag, starImg, heading, book, clock, tutor, tutorImg, price }) => {
	return (
		<div className="bg-white px-2 py-4 flex flex-col">
			<Image src={mainImg} alt="" />
			<div className="flex justify-between items-center">
				<div className="py-2 px-3 bg-tag rounded-[1rem]">{tag}</div>
				<div className="flex">
					<span className="">4.7k</span> <Image src={starImg} alt="" /> <span className="ml-1">(32.7k+)</span>
				</div>
				<div className="">
					<h2 className="">{heading} </h2>
				</div>
				<div className="flex justify-between items-center">
					<div className="">
						<Image src={clock} alt="" />
						<span className="ml-1">{duration}</span>
					</div>
					<div className="">
						<Image src={book} alt="" />
						<span className="ml-1">{lessons}</span>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<div className="">
						<Image src={tutorImg} alt="" />
						<span className="ml-1">{tutor}</span>
					</div>
					<div className="">
						<span className="ml-1">{price}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoursesCard;
