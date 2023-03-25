import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";



const Testimonials = ({ clashDisplay }) => {
	return (
		<section className="py-[2.5rem]">
			<div className="text-center w-[90%] mx-auto">
				<h2
					className={`${clashDisplay} capitalize font-bold text-[1.5rem] text-heading mb-2 leading-[1.7] relative w-[fit-content] mx-auto`}
				>
					what our clients are saying
				</h2>
				<p className="text-copy">
					High-definition video is video of higher resolution and quality than standard definition. while there&apos;s
					no standard meaning for high definition, generally any standard video image
				</p>
			</div>
			<div className="">
				{/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide>
					<SwiperSlide>Slide 8</SwiperSlide>
					<SwiperSlide>Slide 9</SwiperSlide>
				</Swiper> */}
			</div>
		</section>
	);
};

export default Testimonials;
