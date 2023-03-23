import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, clashDisplay, satoshi }) => {
	return (
		<>
			<Header className={satoshi} />
			<main className={`${clashDisplay} ${satoshi}`}>{children} </main>
			<Footer className={`${clashDisplay} ${satoshi}`} />
		</>
	);
};

export default Layout;
