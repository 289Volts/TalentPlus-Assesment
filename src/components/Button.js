import React from "react";

const Button = ({ click, label, classes, key }) => {
	return (
		<button onClick={click} className={classes}>
			{label}
		</button>
	);
};

export default Button;
