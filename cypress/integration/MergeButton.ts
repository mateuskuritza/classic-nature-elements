/// <reference types="cypress" />

context("Merge Button Test", () => {
	it("Should render the merge button", () => {
		cy.visit("http://localhost:3000/");
		cy.contains("Fundir!").should("exist");
	});

	it("Should show fail modal on click if not domain all elements and close modal if click", () => {
		cy.visit("http://localhost:3000/");
		cy.get(".Toastify__toast--error").should("not.exist");
		cy.contains("Fundir!").click();
		cy.get(".Toastify__toast--error").should("exist");
		cy.get(".Toastify__toast--error").click();
		cy.get(".Toastify__toast--error").should("not.exist");
	});

	it("Should show success modal on click if not domain all elements and close modal if click", () => {
		cy.visit("http://localhost:3000/");
		cy.get(".Toastify__toast--success").should("not.exist");

		cy.get("#root > div > div:last-child").within(() => {
			cy.get("button").click({ multiple: true });
		});

		cy.contains("Fundir!").click();

		cy.get(".Toastify__toast--success").should("exist");
		cy.get(".Toastify__toast--success").click();
		cy.get(".Toastify__toast--success").should("not.exist");
	});
});
