import React from "react";

const Hamburger = ({ isOpen, onClick }) => {
	return (
		<button aria-expanded={`${isOpen ? "true" : "false"}`} className="toggle" onClick={onClick}>
			<svg fill="#fff" className="hamburger" viewBox="0 0 100 100" width="40">
				<rect className="line top" width="80" height="10" x="10" y="25" rx="5"></rect>
				<rect className="line middle" width="80" height="10" x="10" y="45" rx="5"></rect>
				<rect className="line bottom" width="80" height="10" x="10" y="65" rx="5"></rect>
			</svg>
		</button>
	);
};

export default Hamburger;
