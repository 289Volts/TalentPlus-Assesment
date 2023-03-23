import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, clashDisplay, satoshi }) => {
	return (
		<>
			<Header satoshi={satoshi} />
			<main className={satoshi}>{children} </main>
			<Footer clashDisplay={clashDisplay} satoshi={satoshi} />
		</>
	);
};

export default Layout;
