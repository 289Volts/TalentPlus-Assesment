import Link from "next/link";
import React from "react";

const AltLink = ({ classes, url, label }) => {
	return (
		<Link href={url} className={`flex w-[fit-content] font-bold ${classes}`}>
			{label}
		</Link>
	);
};

export default AltLink;
