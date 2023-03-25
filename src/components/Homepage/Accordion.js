import Image from "next/image";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import close from "../../../public/assets/icons/FAQ/close.svg";
import open from "../../../public/assets/icons/FAQ/open.svg";

const Accordion = ({ title, content, index }) => {
	const [isOpen, setIsOpen] = useState([0]);

	const openAccordion = (index) => {
		const isOpened = isOpen.includes(index);
		setIsOpen(isOpened ? isOpen.filter((i) => i !== index) : [...isOpen, index]);
	};
	return (
		<div className="pb-2 mt-5 border-b-FAQBorder border-b">
			<div onClick={() => openAccordion(index)} className="flex items-center justify-between">
				<h2 className={`font-[900] ${isOpen.includes(index) ? "text-primary" : "text-heading"} md:text-[1.5rem]`}>{title}</h2>
				<Image
					src={isOpen.includes(index) ? open : close}
					alt="open"
					className="w-[15px] aspect-square transition duration-500"
				/>
			</div>
			<Collapse isOpened={isOpen.includes(index)}>
				<p className="mt-3">{content}</p>
			</Collapse>
		</div>
	);
};

export default Accordion;
