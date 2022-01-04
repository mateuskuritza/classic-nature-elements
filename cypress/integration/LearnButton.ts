/// <reference types="cypress" />

context("Learn Button Test", () => {
	it("Should render 4 learn button", () => {
		cy.visit("http://localhost:3000/");
		cy.get("button:contains(Dominar)").should("have.length", 4);
	});

	it("Should change the two texts on click", () => {
		cy.visit("http://localhost:3000/");

		cy.contains("Dominado").should("not.exist");
		cy.contains("Dominar").should("exist");

		cy.contains("Dominar").click();

		cy.contains("Dominado").should("exist");
		cy.contains("Esquecer").should("exist");
	});
});
