describe('Test web tables', () => {

    beforeEach(()=> {


        cy.visit(Cypress.env("baseUrlDemoQA"));
        cy.url().should('include', Cypress.env("baseUrlDemoQA"));

        cy.get('h5').contains('Elements').click()
        cy.get('.main-header').should('have.text', 'Elements')

        cy.get('#item-3').click()
        
    })

    it('checkbox test', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Kawhi')
        cy.get('#lastName').type('Leonard')
        cy.get('#userEmail').type('tesdt@test.com')
        cy.get('#age').type('58')
        cy.get('#salary').type('1000')
        cy.get('#department').type('Sucre')
        cy.get('#submit').click()
    })

})

