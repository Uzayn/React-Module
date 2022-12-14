//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
	color: "black"
};

let text = "";
let date = new Date();
let currentTime = date.getHours();
console.log(currentTime);
if (currentTime >= 0 && currentTime <= 12) {
	text = "Good Morning";
	customStyle.color = "red";
} else if (currentTime >= 12 && currentTime <= 18) {
	text = "Good Afternoon";
	customStyle.color = "green";
} else {
	text = "Good Evening";
	customStyle.color = "blue";
}

ReactDOM.render(
	<div>
		<h1 style={customStyle} className="heading">
			{text}
		</h1>
	</div>,
	document.getElementById("root")
);
