import styled from "styled-components";

export default function Button(props: any) {
	const { children, ...rest } = props;
	return <ButtonStyle {...rest}>{children}</ButtonStyle>;
}

const ButtonStyle = styled.button`
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
