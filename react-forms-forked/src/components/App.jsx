import React, { useState } from "react";

function App() {
	const [name, setName] = useState("");
	const [endName, setEndName] = useState("");

	function handleChange() {
		setName(event.target.value);
	}

	function handleClick() {
		setEndName(name);
	}

	return (
		<div className="container">
			<h1>Hello {endName}</h1>
			<input
				onChange={handleChange}
				type="text"
				placeholder="What's your name?"
			/>
			<button onClick={handleClick}>Submit</button>
		</div>
	);
}

export default App;
