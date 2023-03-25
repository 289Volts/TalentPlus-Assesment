import React from "react";
import Image from "next/image";
import mobileFooterLogo from "../../../public/assets/images/Footer/mobileFooterLogo.svg";
import discord from "../../../public/assets/images/Footer/discord.svg";
import facebook from "../../../public/assets/images/Footer/facebook.svg";
import instagram from "../../../public/assets/images/Footer/instagram.svg";
import twitter from "../../../public/assets/images/Footer/twitter.svg";
import youtube from "../../../public/assets/images/Footer/youtube.svg";
import { usefulLinks, community } from "../../../data/footer";
import Link from "next/link";

const Footer = ({ clashDisplay, satoshi }) => {
	const [input, setInput] = React.useState("");

	const handleInput = (e) => {
		e.preventDefault();
	};

	return (
		<footer className={`py-[2.5rem] bg-footerBg text-white ${satoshi} pb-[7rem]`}>
			<div className="w-[90%] mx-auto">
				<div className="space-y-6 mb-[4rem]">
					<Image src={mobileFooterLogo} alt="" />
					<p className="">Reach out to us on any of our social media networks</p>
					<div className="flex gap-6">
						<Image src={facebook} alt="" />
						<Image src={twitter} alt="" />
						<Image src={youtube} alt="" />
						<Image src={instagram} alt="" />
						<Image src={discord} alt="" />
					</div>
				</div>
				<div className="space-y-8">
					<div className="">
						<h3 className={`capitalize ${clashDisplay} font-semibold text-2xl mb-6`}>useful links</h3>
						<ul className="space-y-4">
							{usefulLinks.map(({ id, url, text }) => (
								<li key={id} className="">
									<Link href={url}>{text}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="">
						<h3 className={`capitalize ${clashDisplay} font-semibold text-2xl mb-6`}>Community</h3>
						<ul className="space-y-4">
							{community.map(({ id, url, text }) => (
								<li key={id} className="">
									<Link href={url}>{text}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="">
						<h3 className={`capitalize ${clashDisplay} font-semibold text-2xl mb-6`}>subscribe us</h3>
						<div className="flex items-center">
							<input
								type="text"
								className="border-primary border bg-inputBg py-[7px] flex-1 px-2 placeholder:text-sm placeholder:text-placeholder"
								placeholder="nft123@gmail.com"
							/>
							<button className="capitalize text-white py-[10px] px-4 bg-primary text-sm font-medium rounded-[3px] rounded-tl-none rounded-bl-none">
								send message
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
