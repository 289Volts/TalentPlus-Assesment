import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import bella from "../../../public/assets/images/Testimonial/bella.svg";
import bryce from "../../../public/assets/images/Testimonial/bryce.svg";
import samuel from "../../../public/assets/images/Testimonial/samuel.svg";
import TestimonialCard from "./TestimonialCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = ({ clashDisplay }) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		}
	}, []);

	const testimonial = [
		{ id: 1, src: bella, tutor: "bella moon", role: "product designer" },
		{ id: 2, src: samuel, tutor: "samuel fortune", role: "product designer" },
		{ id: 3, src: bryce, tutor: "bryce jason", role: "product designer" },
		{ id: 4, src: samuel, tutor: "samuel fortune", role: "product designer" },
		{ id: 5, src: bryce, tutor: "bryce jason", role: "product designer" },
	];

	return (
		<section className="py-[2.5rem] md:py-[5rem]">
			<div className="text-center w-[90%] mx-auto lg:w-[87%] mb-[2rem]">
				<h2
					className={`${clashDisplay} capitalize font-bold text-[1.5rem] text-heading mb-2 leading-[1.7] relative w-[fit-content] mx-auto md:text-[2rem] lg:text-[3.5rem]`}
				>
					what our clients are saying
				</h2>
				<p className="text-copy md:w-[60%] mx-auto text-sm mobile:text-base">
					High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
					no standard meaning for high definition, generally any standard video image
				</p>
			</div>
				<div className="p-4 mx-auto text-left">
					<Swiper
						className=""
						modules={[Autoplay, Pagination, A11y]}
						spaceBetween={isMobile ? 16 : 24}
						slidesPerView={isMobile ? 1 : 3}
						pagination={{ clickable: true }}
						autoplay={{ delay: 2500, disableOnInteraction: false }}
					>
						{testimonial.map(({ tutor, id, role, src }) => (
							<SwiperSlide key={id}>
								<TestimonialCard tutor={tutor} role={role} src={src} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
		</section>
	);
};

export default Testimonials;
