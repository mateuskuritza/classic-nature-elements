import React from "react";
import { render, screen } from "@testing-library/react";
import Element from "./Element";

it("Should render Element", () => {
    const element = {
        name: 'fire',
        learned: false
    }
    const { container } = render(<Element elementInfos={element} />);
    expect(container).toMatchSnapshot();
});

it("Should render name upperCase", () => {
    const element = {
        name: 'fire',
        learned: false
    }
    const { container } = render(<Element elementInfos={element} />);
    const nameText = screen.getByText(element.name.toUpperCase())
    expect(nameText).toBeDefined();
    expect(container).toMatchSnapshot();
});

it("Should render Dominar text and NotLearned component", () => {
    const element = {
        name: 'fire',
        learned: false
    }
    const { container } = render(<Element elementInfos={element} />);

    const buttonTextNotLearned = screen.getByText('Dominar');
    expect(buttonTextNotLearned).toBeDefined();

    const notLearnedComponent = screen.getByText('Não dominado');
    expect(notLearnedComponent).toBeDefined();

    expect(container).toMatchSnapshot();
});

it("Should render Esquecer text and Learned component", () => {
    const element = {
        name: 'fire',
        learned: true
    }
    const { container } = render(<Element elementInfos={element} />);

    const buttonTextLearned = screen.getByText('Esquecer');
    expect(buttonTextLearned).toBeDefined();

    const learnedComponent = screen.getByText('Dominado!');
    expect(learnedComponent).toBeDefined();

    expect(container).toMatchSnapshot();
});

it("Should correct img (src) and alt text", () => {
    const element = {
        name: 'fire',
        learned: true
    }
    const { container } = render(<Element elementInfos={element} />);

    const img = screen.getByRole('img');
    expect(img.getAttribute('src')).toBe(`./assets/${element.name}.jpg`);
    expect(img.getAttribute('alt')).toBe(`${element.name} element`);

    expect(container).toMatchSnapshot();
});