import React from "react";
import { render, screen } from "@testing-library/react";
import Learned from "./Learned";

it("Should render Learned", () => {
	const { container } = render(<Learned />);
	const button = screen.getByText("Dominado!");
	expect(button).toBeDefined();
	expect(container).toMatchSnapshot();
});
