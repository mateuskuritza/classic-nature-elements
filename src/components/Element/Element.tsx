import styled from "styled-components";
import IElement from "../../interfaces/IElement";
import Button from "../Button/Button";
import Learned from "../Learned/Learned";
import NotLearned from "../NotLearned/NotLearned";

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
