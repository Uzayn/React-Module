import React, { useState } from "react";

function App() {
	const [contact, setContact] = useState({
		fName: "",
		lName: "",
		email: ""
	});

	function handleChange(event) {
		const newValue = event.target.value;
		const inputName = event.target.name;

		setContact((prevValue) => {
			console.log(prevValue);

			if (inputName === "fName") {
				return {
					fName: newValue,
					lName: prevValue.lName
				};
			} else if (inputName === "lName") {
				return {
					fName: prevValue.fName,
					lName: newValue
				};
			} else {
				return {
					email: newValue
				};
			}
		});
	}

	return (
		<div className="container">
			<h1>
				Hello {contact.fName} {contact.lName}
			</h1>
			<p>{contact.email}</p>
			<form>
				<input onChange={handleChange} name="fName" placeholder="First Name" />
				<input onChange={handleChange} name="lName" placeholder="Last Name" />
				<input onChange={handleChange} name="email" placeholder="Email" />
				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
