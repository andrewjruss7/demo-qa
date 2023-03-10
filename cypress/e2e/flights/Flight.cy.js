/*import FlightPO from "flightPO.js";

const flight = new FlightPO;*/

describe("Buscar vuelos",() => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.url().should('include',Cypress.env('baseUrl'));
    })
    it("botones",() =>{
        cy.get("#one-way");
        cy.get("#round-trip");
        cy.get("#flight_type");
        cy.get("#autocomplete");
        cy.get("#autocomplete2");
        cy.get("#departure");
        cy.get("#return");
        cy.get("");
        //cy.get("#flights-search");

    })
})