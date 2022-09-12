import React, { useState } from "react";

function App() {
	const [input, setInput] = useState("");
	const [listArray, setListArray] = useState([]);

	function handleChange(event) {
		const inputValue = event.target.value;
		setInput(inputValue);
	}

	function handleClick() {
		setListArray(prevItems => {
			return [...prevItems, input];
		});
		setInput("");
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input onChange={handleChange} value={input} type="text" />
				<button onClick={handleClick}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					{listArray.map((arrayItem) => (
						<li>{arrayItem}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
