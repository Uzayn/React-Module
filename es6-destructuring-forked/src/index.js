// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const { coloursByPopularity: hondaColours, speedStats: hondaStats } = honda;
const { coloursByPopularity: teslaColours, speedStats: teslaStats } = tesla;

const { topSpeed: hondaTopSpeed } = hondaStats;
const { topSpeed: teslaTopSpeed } = teslaStats;

const [hondaTopColour] = hondaColours;
const [teslaTopColour] = teslaColours;

ReactDOM.render(
	<table>
		<tr>
			<th>Brand</th>
			<th>Top Speed</th>
			<th>Top Colour</th>
		</tr>
		<tr>
			<td>{tesla.model}</td>
			<td>{teslaTopSpeed}</td>
			<td>{teslaTopColour}</td>
		</tr>
		<tr>
			<td>{honda.model}</td>
			<td>{hondaTopSpeed}</td>
			<td>{hondaTopColour}</td>
		</tr>
	</table>,
	document.getElementById("root")
);