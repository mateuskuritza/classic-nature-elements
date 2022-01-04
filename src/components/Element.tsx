import styled from "styled-components";
import IElement from "../interfaces/IElement";
import Learned from "./Learned";
import NotLearned from "./NotLearned";

export default function Element({ elementInfos: { name, learned }, changeElement }: { elementInfos: IElement; changeElement: CallableFunction }) {
	return (
		<Container>
			<Image src={`./assets/${name}.jpg`} alt={`${name} element`} />
			<Button onClick={() => changeElement(name, !learned)}>{learned ? "Esquecer" : "Dominar"}</Button>
			<p>{name.toUpperCase()}</p>
			{learned ? <Learned /> : <NotLearned />}
		</Container>
	);
}

const Button = styled.button`
	border: none;
	border-radius: 10px;
	padding: 5px;
	width: 80%;

	background-color: #397ca8;
	color: white;

	cursor: pointer;

	:hover {
		transform: scale(1.05);
		background-color: #599ecc;
	}
`;

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
