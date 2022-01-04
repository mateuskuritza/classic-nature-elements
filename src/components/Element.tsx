import styled from "styled-components";
import IElement from "../interfaces/IElement";
import Learned from "./Learned";
import NotLearned from "./NotLearned";

export default function Element({ elementInfos: { name, learned } }: { elementInfos: IElement }) {
	return (
		<Container>
			<Image src={`./assets/${name}.jpg`} alt={`${name} element`} />
			<p>{name.toUpperCase()}</p>
			{learned ? <Learned /> : <NotLearned />}
		</Container>
	);
}

const Container = styled.div`
	width: 150px;
	height: 250px;
	padding: 10px 6px;

	border: 1px solid #969696;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const Image = styled.img`
	height: 100px;
	width: 100px;
	object-fit: cover;
	border-radius: 100%;
	border: 1px solid black;
`;
