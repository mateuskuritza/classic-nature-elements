import styled from "styled-components";
import Button from "../Button/Button";

export default function MergeContainer({ merge }: { merge: CallableFunction }) {
	return (
		<Container>
			<img src="./assets/yin-yang.png" alt="yin yang merge" />
			<Button onClick={() => merge()}>Fundir!</Button>
		</Container>
	);
}

const Container = styled.div`
	img {
		object-fit: contain;
		width: 200px;
		height: 200px;
		margin-bottom: 10px;
	}
`;
