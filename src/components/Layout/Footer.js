import React from "react";
import Image from "next/image";
import mobileFooterLogo from "../../../public/assets/images/Footer/mobileFooterLogo.svg";
import desktopFooterLogo from "../../../public/assets/images/Footer/desktopFooterLogo.svg";
import discord from "../../../public/assets/images/Footer/discord.svg";
import facebook from "../../../public/assets/images/Footer/facebook.svg";
import instagram from "../../../public/assets/images/Footer/instagram.svg";
import twitter from "../../../public/assets/images/Footer/twitter.svg";
import youtube from "../../../public/assets/images/Footer/youtube.svg";
import { usefulLinks, community } from "../../../data/footer";
import Link from "next/link";

const Footer = ({ clashDisplay, satoshi }) => {

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<footer className={`py-[2.5rem] bg-footerBg text-white ${satoshi} pb-[7rem] md:pt-[5rem]`}>
			<div className="w-[90%] mx-auto lg:w-[87%] md:grid grid-cols-2 lg:flex flex-wrap justify-between gap-[2rem]">
				<div className="space-y-6 mb-[4rem] lg:w-[30%]">
					<Image src={mobileFooterLogo} alt="" className="md:hidden" />
					<Image src={desktopFooterLogo} alt="" className="hidden md:block" />
					<p className="">Reach out to us on any of our social media networks</p>
					<div className="flex gap-6">
						<Image src={facebook} alt="" />
						<Image src={twitter} alt="" />
						<Image src={youtube} alt="" />
						<Image src={instagram} alt="" />
						<Image src={discord} alt="" />
					</div>
				</div>

				<div className="mb-8 md:m-0">
					<h3 className={`capitalize ${clashDisplay} font-semibold text-2xl mb-6 md:text-[2rem]`}>useful links</h3>
					<ul className="space-y-4">
						{usefulLinks.map(({ id, url, text }) => (
							<li key={id} className=" text-sm mobile:text-base">
								<Link href={url}>{text}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="mb-8 md:m-0">
					<h3 className={`capitalize ${clashDisplay} font-semibold text-2xl mb-6 md:text-[2rem]`}>Community</h3>
					<ul className="space-y-4">
						{community.map(({ id, url, text }) => (
							<li key={id} className=" text-sm mobile:text-base">
								<Link href={url}>{text}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="">
					<h3 className={`capitalize ${clashDisplay} font-semibold text-2xl mb-6 md:text-[2rem]`}>subscribe us</h3>
					<div className="flex items-center">
						<input
							type="text"
							className="w-full border-primary border bg-inputBg py-[7px] flex-1 px-2 placeholder:text-sm border-r-0 placeholder:text-white/70"
							placeholder="nft123@gmail.com"
						/>
						<button onClick={handleSubmit} className="capitalize text-white py-[9.8px] px-4 bg-primary text-sm font-medium rounded-[3px] rounded-tl-none rounded-bl-none w-[43%] mobile:w-auto">
							send message
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
