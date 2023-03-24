import React from "react";

const Button = ({ onClick, label, classes }) => {
	return (
		<button onClick={onClick} className={classes}>
			{label}
		</button>
	);
};

export default Button;
