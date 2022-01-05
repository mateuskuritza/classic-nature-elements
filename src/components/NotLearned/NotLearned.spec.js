import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NotLearned from "./NotLearned";

it("Should render NotLearned", () => {
	const { container } = render(<NotLearned />);
	const button = screen.getByText("Não dominado");
	expect(button).toBeDefined();
	expect(container).toMatchSnapshot();
});
