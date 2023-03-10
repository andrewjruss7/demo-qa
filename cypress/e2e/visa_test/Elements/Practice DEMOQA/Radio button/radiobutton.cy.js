import RadioButton from "./radiobuttonPO";



describe('Test Radio button', () => { 


    beforeEach(()=> {


        cy.visit(Cypress.env("baseUrlDemoQA"));
        cy.url().should('include', Cypress.env("baseUrlDemoQA"));

        cy.get('h5').contains('Elements').click()
        cy.get('.main-header').should('have.text', 'Elements')

        cy.get('#item-2').click()


    })

    it('checkbox test', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

    const RadioBtn = new RadioButton();

       RadioBtn.checkYes();
        cy.get('.mt-3').should('be.visible')

       RadioBtn.checkImpressive();
        cy.get('.mt-3').should('be.visible')



    })

})



    
