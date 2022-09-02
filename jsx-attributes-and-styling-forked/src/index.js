import React from "react";
import ReactDOM from "react-dom";
const customStyle = {
	color: "green",
	fontSize: "25px",
	border: "5px solid blue"
};
customStyle.border = "none";
ReactDOM.render(
	<div>
		<h1 style={customStyle} className="heading">
			My Favourite Foods
		</h1>
		<ul>
			<li>Bacon</li>
			<li>Jamon</li>
			<li>Noodles</li>
		</ul>
	</div>,
	document.getElementById("root")
);
