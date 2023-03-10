import CheckboxAll from "./checkbox";



describe('Test checkbox', () => { 


    beforeEach(()=> {


        cy.visit(Cypress.env("baseUrlDemoQA"));
        cy.url().should('include', Cypress.env("baseUrlDemoQA"));

        cy.get('h5').contains('Elements').click()
        cy.get('.main-header').should('have.text', 'Elements')

        cy.get('#item-1').click()


    })



    it('checkbox test', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

    const checkBox = new CheckboxAll() ;


        checkBox.getCheckbox();
        
        checkBox.getExpand();
        checkBox.getExpandAll()
        
        cy.get('#result').should('be.visible')
    })

})