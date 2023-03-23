import React from "react";
import Image from "next/image";
import monday from "../../../public/assets/images/monday.svg";
import stripe from "../../../public/assets/images/stripe.svg";
import slack from "../../../public/assets/images/slack.svg";
import zoom from "../../../public/assets/images/zoom.svg";
import dropbox from "../../../public/assets/images/dropbox.svg";

const Clients = () => {
	return (
		<section className="bg-clients">
			<div className="w-[80%] mx-auto py-[1.5rem] flex justify-between items-center">
				<Image src={zoom} alt="zoom" />
				<Image src={stripe} alt="stripe" />
				<Image src={monday} alt="monday" />
				<Image src={slack} alt="slack" />
				<Image src={dropbox} alt="dropbox" />
			</div>
		</section>
	);
};

export default Clients;
