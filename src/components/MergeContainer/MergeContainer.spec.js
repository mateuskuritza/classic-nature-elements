import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MergeContainer from "./MergeContainer";

it("Should render MergeContainer", () => {
    const { container } = render(<MergeContainer />);
    expect(container).toMatchSnapshot();
});

it("Should render MergeContainer image", () => {
    const { container } = render(<MergeContainer />);
    const img = screen.getByRole("img");
    expect(img.getAttribute('src')).toBe('./assets/yin-yang.png');
    expect(container).toMatchSnapshot();
});

it("Should render MergeContainer button", () => {
    const { container } = render(<MergeContainer />);
    const button = screen.getByText('Fundir!');
    expect(button).toBeDefined();
    expect(container).toMatchSnapshot();
});

it("Should call merge function if click in MergeContainer button", () => {
    let value = false;
    const merge = () => value = true;
    const { container } = render(<MergeContainer merge={merge} />);
    const button = screen.getByText('Fundir!');
    expect(button).toBeDefined();

    expect(value).toBe(false);
    fireEvent.click(button);
    expect(value).toBe(true);

    expect(container).toMatchSnapshot();
});