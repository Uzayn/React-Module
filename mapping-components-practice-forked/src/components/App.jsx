import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function Card(details) {
	return (
		<Entry
			key={details.id}
			emoji={details.emoji}
			name={details.name}
			meaning={details.meaning}
		/>
	);
}

function App() {
	return (
		<div>
			<h1>
				<span>emojipedia</span>
			</h1>
			<dl className="dictionary">{emojipedia.map(Card)}</dl>
		</div>
	);
}

export default App;
