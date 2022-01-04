import styled from "styled-components";

export default function NotLearned() {
	return (
		<Container>
			<p>Não dominado</p>
		</Container>
	);
}

const Container = styled.div`
	background-color: red;
	color: white;
	width: 90%;
	text-align: center;
	padding: 2px;
	border-radius: 4px;
`;
