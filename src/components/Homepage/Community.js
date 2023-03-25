import Image from "next/image";
import React from "react";
import mobileCommunityImg from "../../../public/assets/images/Community/map.svg";
import desktopCommunityImg from "../../../public/assets/images/Community/desktopMap.svg";
import AltLink from "../AltLink";

const Community = ({ clashDisplay }) => {
	return (
		<section className="bg-primary py-[2.5rem] text-white">
			<div className="w-[90%] mx-auto lg:w-[87%]">
				<div className="text-center">
					<p className="uppercase font-medium text-sm md:text-base">join our community</p>
					<h2 className={`${clashDisplay} font-bold text-[1.5rem] mb-2 leading-[1.4] relative w-[fit-content] mx-auto md:text-[2rem] lg:text-[3.5rem]`}>
						Are you ready to connect with the future talent of the tech world?
					</h2>
					<p className=" capitalize">meet up with other techstars and grow together</p>
				</div>
				<div className="my-7 md:w-[80%] mx-auto lg:w-[75%]">
					<Image src={mobileCommunityImg} alt="" className="md:hidden"  />
					<Image src={desktopCommunityImg} alt="" className="hidden md:block"  />
				</div>
				<div className="flex justify-center">
					<AltLink
						url="/community"
						label="join our community"
						classes="text-primary bg-white py-3 px-6 capitalize text-sm rounded-[3px] md:py-4 md:px-8 md:text-base"
					/>
				</div>
			</div>
		</section>
	);
};

export default Community;
