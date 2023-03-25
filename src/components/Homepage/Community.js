import Image from "next/image";
import React from "react";
import mobileCommunityImg from "../../../public/assets/images/Community/map.svg";
import AltLink from "../AltLink";

const Community = ({ clashDisplay }) => {
	return (
		<section className="bg-primary py-[2.5rem] text-white">
			<div className="w-[90%] mx-auto">
				<div className="text-center">
					<p className="uppercase font-medium text-sm">join our community</p>
					<h2 className={`${clashDisplay} font-bold text-[1.5rem] mb-2 leading-[1.4] relative w-[fit-content] mx-auto`}>
						Are you ready to connect with the future talent of the tech world?
					</h2>
					<p className=" capitalize">meet up with other techstars and grow together</p>
				</div>
				<div className="my-7">
					<Image src={mobileCommunityImg} alt="" />
				</div>
				<div className="flex justify-center">
					<AltLink
						url="/community"
						label="join our community"
						classes="text-primary bg-white py-3 px-6 capitalize text-sm rounded-[3px]"
					/>
				</div>
			</div>
		</section>
	);
};

export default Community;
