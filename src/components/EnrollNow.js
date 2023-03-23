import Link from "next/link";
import React from "react";

const EnrollNow = ({url, classes}) => {
	return (
		<Link href={url} className={`${classes} bg-white text-primary font-bold rounded-[2px] md:rounded-[2px]`}>
			Enroll Now
		</Link>
	);
};

export default EnrollNow;
