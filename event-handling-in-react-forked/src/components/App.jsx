import React, { useState } from "react";

function App() {
	const [Heading, setHeading] = useState("Hello");

	function Clicked() {
		setHeading("Submitted");
	}

	const [backgroundColor, setBackgroundColor] = useState({
		backgroundColor: "white"
	});

	function Hover() {
		setBackgroundColor({ backgroundColor: "black" });
	}

	function unHover() {
		setBackgroundColor({ backgroundColor: "white" });
	}

	return (
		<div className="container">
			<h1>{Heading}</h1>
			<input type="text" placeholder="What's your name?" />
			<button
				onClick={Clicked}
				style={backgroundColor}
				onMouseOver={Hover}
				onMouseOut={unHover}>
				Submit
			</button>
		</div>
	);
}

export default App;
