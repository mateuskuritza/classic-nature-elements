import React from "react";

import "./styles/reset.css";
import GlobalStyle from "./styles/global";
import Element from "./components/Element";
import IElement from "./interfaces/IElement";

function App() {
	const elements: IElement[] = [
		{
			name: "air",
			learned: false,
		},
		{
			name: "fire",
			learned: true,
		},
		{
			name: "earth",
			learned: false,
		},
		{
			name: "water",
			learned: true,
		},
	];
	return (
		<div>
			<GlobalStyle />
			{elements.map((element) => (
				<Element elementInfos={element} />
			))}
		</div>
	);
}

export default App;
