import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

it('Should render the Button', () => {
    const { container } = render(<Button />)
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
    expect(container).toMatchSnapshot();
});

it('Should render the Button with children', () => {
    const text = "testText";
    const { container } = render(<Button >{text}</Button>)
    const button = screen.getByText(text);
    expect(button.innerHTML).toBe(text);
    expect(container).toMatchSnapshot();
});


it('Should render the Button with props', () => {
    const text = "testText";
    const { container } = render(<Button placeholder={text}></Button>)
    const button = screen.getByPlaceholderText(text);
    expect(button.innerText).toBe(undefined);
    expect(container).toMatchSnapshot();
});

it('Should render the Button with children and props with function', () => {
    const text = "testText";
    let value = false
    const testFunction = () => {
        value = true;
    };

    const { container } = render(<Button placeholder={text} onClick={() => testFunction()}>{text}</Button>)

    const button = screen.getByPlaceholderText(text);
    expect(button.innerHTML).toBe(text);
    expect(container).toMatchSnapshot();

    fireEvent.click(button)
    expect(value).toBe(true);
});