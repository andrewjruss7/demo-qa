describe('CheckBox trial', () =>{
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.url().should('include', Cypress.env('baseUrl'));
    })

    it('Check all CheckBox',() => {
        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false
        })
        cy.get('h5').contains('Elements').click();
        cy.get('#item-1').click();
        //cy.get('.rct-option-expand-all').click();#tree-node > ol > li > span > button

        cy.get('.rct-collapse-btn').eq(0).click();
        cy.get('.rct-collapse-btn').eq(1).click();
        cy.get('.rct-collapse-btn').eq(2).click();
        cy.get('.rct-collapse-btn').eq(3).click();
        cy.get('.rct-collapse-btn').eq(4).click();
        cy.get('.rct-collapse-btn').eq(5).click();

    }) 
})