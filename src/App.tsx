import React from "react";

import "./styles/reset.css";
import GlobalStyle from "./styles/global";
import Element from "./components/Element";

function App() {
	const elements = ["air", "fire", "earth", "water"];
	return (
		<div>
			<GlobalStyle />
			{elements.map((name) => (
				<Element name={name} />
			))}
		</div>
	);
}

export default App;
