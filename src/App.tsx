import React, { useCallback, useState } from "react";

import "./styles/reset.css";
import GlobalStyle from "./styles/global";
import Element from "./components/Element";
import IElement from "./interfaces/IElement";

function App() {
	const [elements, setElements] = useState<IElement[]>([
		{
			name: "air",
			learned: false,
		},
		{
			name: "fire",
			learned: false,
		},
		{
			name: "earth",
			learned: false,
		},
		{
			name: "water",
			learned: false,
		},
	]);

	const handleElementLearn = useCallback(
		(elementName, learned) => {
			const newElements = [...elements];
			const element = newElements.find((element) => element.name === elementName);
			// @ts-ignore:next-line
			element.learned = learned;
			setElements(newElements);
		},
		[setElements, elements]
	);

	return (
		<div>
			<GlobalStyle />
			{elements.map((element, i) => (
				<Element key={i} elementInfos={element} changeElement={handleElementLearn} />
			))}
		</div>
	);
}

export default App;
