//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
	<div>
		<h1>This is the Heading</h1>
		<ul>
			<li>List 1</li>
			<li>List 2</li>
			<li>List 3</li>
		</ul>
	</div>,
	document.getElementById("root")
);
