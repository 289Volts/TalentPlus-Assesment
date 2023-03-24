import Image from "next/image";
import React from "react";

const CoursesCard = ({
	mainImg,
	tag,
	starImg,
	heading,
	book,
	clock,
	tutor,
	tutorImg,
	price,
	duration,
	lessons,
	clashDisplay,
}) => {
	return (
		<div className="bg-white px-3 py-4 flex flex-col">
			<div className="w-full">
				<Image src={mainImg} alt="" className="w-full" />
			</div>
			<div className="flex justify-between items-center mt-2 mb-3">
				<div className="py-[6px] px-4 font-bold text-primary text-xs bg-tagBg rounded-[1rem]">{tag}</div>
				<div className="flex text-xs items-center">
					<span className="">4.7k</span>
					<Image src={starImg} alt="" className="w-[0.8rem] aspect-square" /> <span className="ml-1">(32.7k+)</span>
				</div>
			</div>
			<div className="mb-2 font-bold">
				<h2 className={`text-left text-lg ${clashDisplay}`}>{heading} </h2>
			</div>
			<div className="flex justify-between items-center mb-6">
				<div className="flex items-center">
					<Image src={clock} alt="" className="w-[1rem] aspect-square" />
					<span className="ml-1 text-xs">{duration}</span>
				</div>
				<div className="flex items-center">
					<Image src={book} alt="" className="w-[1rem] aspect-square" />
					<span className="ml-1 text-xs">{lessons}</span>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<Image src={tutorImg} alt="" className="w-[2rem] aspect-square" />
					<span className="ml-1 font-bold text-sm capitalize">{tutor}</span>
				</div>
				<div className="">
					<span className={`ml-1 font-semibold text-primary ${clashDisplay}`}>{price}</span>
				</div>
			</div>
		</div>
	);
};

export default CoursesCard;
