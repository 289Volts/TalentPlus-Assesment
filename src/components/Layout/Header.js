import React from "react";
import Image from "next/image";
import Link from "next/link";
import mobileLogo from "../../../public/assets/images/Header/mobileLogo.svg";
import desktopLogo from "../../../public/assets/images/Header/desktopLogo.svg";
import Hamburger from "./Hamburger";
import { useRouter } from "next/router";
import EnrollNow from "../EnrollNow";

const Header = ({ satoshi }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const hide = () => setIsOpen(false);

	const { asPath } = useRouter();

	const links = [
		{
			id: 1,
			url: "/",
			text: "Home",
		},
		{
			id: 2,
			url: "#",
			text: "About Us",
		},
		{
			id: 3,
			url: "#",
			text: "Courses",
		},
		{
			id: 4,
			url: "#",
			text: "Testimonials",
		},
		{
			id: 5,
			url: "#",
			text: "Community",
		},
	];

	return (
		<header className={`${satoshi} text-white z-[2] absolute top-0 left-0 right-0 bg-transparent`}>
			<div className={`mobile-header px-6 mx-auto py-3 flex items-center justify-between md:py-7 lg:px-0 lg:w-[87%]`}>
				<Link href="/" className="">
					<Image src={mobileLogo} alt="logo" className="sm:hidden" />
					<Image src={desktopLogo} alt="logo" className="hidden sm:block" />
				</Link>
				<div className="lg:hidden">
					<Hamburger onClick={toggle} isOpen={isOpen} />
				</div>
				<div className="hidden lg:block">
					<nav className="">
						<ul className="flex gap-6 items-center">
							{links.map(({ id, text, url }) => (
								<li key={id} className="">
									<Link className={`${asPath === url ? "text-white" : "text-inactive"} font-bold`} href={url}>
										{text}{" "}
									</Link>
								</li>
							))}
							<div className="flex justify-center">
								<EnrollNow url="/" classes="py-4 px-8" />
							</div>
						</ul>
					</nav>
				</div>
			</div>{" "}
			<nav
				className={`z-[-1] absolute ${
					isOpen ? "translate-x-0" : "translate-x-[-100vw]"
				} transition duration-[600ms] w-full top-0 left-0 right-0 sm:w-[60%] lg:hidden`}
			>
				<ul className="bg-primary pt-[4rem] py-[3rem] px-[3rem] text-center flex flex-col gap-4">
					{links.map(({ id, text, url }) => (
						<li key={id} className="">
							<Link
								onClick={hide}
								className={`${asPath === url ? "text-white" : "text-inactive"} font-bold`}
								href={url}
							>
								{text}{" "}
							</Link>
						</li>
					))}
					<div className="flex justify-center">
						<EnrollNow url="/" classes="py-3 px-6" />
					</div>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
