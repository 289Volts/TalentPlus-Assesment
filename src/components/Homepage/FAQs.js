import React from "react";
import { accordionData } from "../../../data/accordion";
import Accordion from "./Accordion";

const FAQs = ({ clashDisplay }) => {
	return (
		<section className="bg-white py-[2.5rem] pb-[4rem] faq">
			<div className="w-[90%] mx-auto">
				<div className="text-center mb-8">
					<h2
						className={`${clashDisplay} capitalize font-bold text-[1.5rem] text-heading mb-2 leading-[1.7] relative w-[fit-content] mx-auto `}
					>
						frequently asked questions
					</h2>
					<p className="text-copy">
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
