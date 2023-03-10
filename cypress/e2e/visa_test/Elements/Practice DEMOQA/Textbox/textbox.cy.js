import Textbox from "./textbox";

describe('Test Textbox', () => { 
    beforeEach(()=> {
      
        cy.visit(Cypress.env("baseUrlDemoQA"));
        cy.url().should('include', Cypress.env("baseUrlDemoQA"));

        cy.get('h5').contains('Elements').click()
        cy.get('.main-header').should('have.text', 'Elements')

        cy.get('#item-0').click()
    }) 

    it('Textbox test', () => {

        const credentials = require('../../../../../fixtures/textBoxData.json')
        const inputText = new Textbox()  

        
     
        Cypress.on('uncaught:exception', (err, runnable) => {
             return false
         })
     
          ; // Cambia el nombre de la variable para tener buenas prácticas semánticas
        inputText.inputFullName(credentials.name)
        inputText.inputEmail(credentials.email)
        inputText.inputCurrentAddress(credentials.address)
        // inputText.inputPermanentAddress(this.credentials.padress)
         inputText.submitBtn()
     
         cy.get('#name').should('be.visible')
         cy.get('#email').should('be.visible')
         cy.get('#currentAddress').should('be.visible')
         cy.get('#permanentAddress').should('be.visible')
     
     })
     
    })
// ya? 