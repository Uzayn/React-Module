import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
	return (
		<div>
			<Header />
			{notes.map((details) => (
				<Note
					key={details.id}
					title={details.title}
					content={details.content}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
