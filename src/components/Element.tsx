import styled from "styled-components";

export default function Element({ name }: { name: string }) {
	return <Image src={`./assets/${name}.jpg`} alt={`${name} element`} />;
}

const Image = styled.img`
	height: 100px;
	width: 100px;
	object-fit: cover;
	border-radius: 100%;
	border: 1px solid black;
`;
