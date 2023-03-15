Cypress.Commands.add("DemoQA", ()=>{
    cy.visit(Cypress.env("baseUrl"))
    cy.url().should('include', Cypress.env("baseUrl"))
    cy.get('h5').contains('Elements').click({force:true})
});