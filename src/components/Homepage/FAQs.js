import React from "react";
import { accordionData } from "../../../data/accordion";
import Accordion from "./Accordion";

const FAQs = ({ clashDisplay }) => {
	return (
		<section className="bg-white py-[2.5rem] pb-[4rem] faq">
			<div className="w-[90%] mx-auto md:w-[80%] lg:w-[70%]">
				<div className="text-center mb-8 md:mb-[3rem]">
					<h2
						className={`${clashDisplay} capitalize font-bold text-[1.5rem] text-heading mb-2 md:text-[2rem] lg:text-[3.5rem]`}
					>
						frequently asked questions
					</h2>
					<p className="text-copy lg:w-[80%] mx-auto">
						High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
						no standard meaning for high definition, generally any standard video image
					</p>
                </div>
                {accordionData.map(({ title, content, id }) => (
                    <Accordion index={id} title={title} content={content} key={id} />
                ))}
			</div>
		</section>
	);
};

export default FAQs;
