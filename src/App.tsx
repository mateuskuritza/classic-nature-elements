import React, { useCallback, useState } from "react";

import styled from "styled-components";
import "./styles/reset.css";
import GlobalStyle from "./styles/global";
import Element from "./components/Element";
import IElement from "./interfaces/IElement";
import MergeContainer from "./components/MergeContainer";

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

	const mergeElements = useCallback(() => {
		const learnedElementsQuantity = elements.filter((element) => element.learned).length;
		if (learnedElementsQuantity !== 4) {
			alert("Elementos dominados insuficientes!");
			return;
		}
		alert("Elementos fundidos!");
	}, [elements]);

	return (
		<PageContainer>
			<GlobalStyle />
			<MergeContainer merge={() => mergeElements()} />
			<ElementsContainer>
				{elements.map((element, i) => (
					<Element key={i} elementInfos={element} changeElement={handleElementLearn} />
				))}
			</ElementsContainer>
		</PageContainer>
	);
}

const PageContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;

const ElementsContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export default App;
