import React from "react";
import Image from "next/image";
import monday from "../../../public/assets/images/Clients/monday.svg";
import stripe from "../../../public/assets/images/Clients/stripe.svg";
import slack from "../../../public/assets/images/Clients/slack.svg";
import zoom from "../../../public/assets/images/Clients/zoom.svg";
import dropbox from "../../../public/assets/images/Clients/dropbox.svg";
import desktopDropbox from "../../../public/assets/images/Clients/desktopDropbox.svg";
import desktopMonday from "../../../public/assets/images/Clients/desktopMonday.svg";
import desktopStripe from "../../../public/assets/images/Clients/desktopStripe.svg";
import desktopSlack from "../../../public/assets/images/Clients/desktopSlack.svg";
import desktopZoom from "../../../public/assets/images/Clients/desktopZoom.svg";

const Clients = () => {
	return (
		<section className="bg-clients">
			<div className="w-[90%] mx-auto py-[1.5rem] flex justify-between items-center lg:hidden">
				<Image src={zoom} alt="zoom" className="md:w-[100px]" />
				<Image src={stripe} alt="stripe" className="md:w-[90px]" />
				<Image src={monday} alt="monday" className="md:w-[160px]" />
				<Image src={slack} alt="slack" className="md:w-[120px]" />
				<Image src={dropbox} alt="dropbox" className="md:w-[160px]" />
			</div>
			<div className="w-[80%] mx-auto py-[1.5rem] justify-between items-center hidden lg:flex gap-[2rem] xl:w-[75%]">
				<Image src={desktopZoom} alt="zoom" className="w-[13%]" />
				<Image src={desktopStripe} alt="stripe" className="w-[11%] xl:w-auto" />
				<Image src={desktopMonday} alt="monday" className="w-[24%] xl:w-auto" />
				<Image src={desktopSlack} alt="slack" className="w-[14.5%] xl:w-auto" />
				<Image src={desktopDropbox} alt="dropbox" className="w-[20%] xl:w-auto" />
			</div>
		</section>
	);
};

export default Clients;
