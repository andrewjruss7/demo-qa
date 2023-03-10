import LoginPO from "./loginPO"

describe("Prueba de texto", ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
        beforeEach(()=>{
        cy.visit(Cypress.env("baseUrl"))
        cy.url().should('include', Cypress.env("baseUrl"))
        
        cy.get('h5').contains('Elements').click({force:true})
    })
        it("ingresar datos a text Box",()=>{
        const TextBox = new LoginPO
        const credentials = require('../../fixtures/example.json')
                          
        TextBox.buttonText()
        TextBox.fillName(credentials.name)
        TextBox.fillEmail(credentials.email)
        TextBox.fillCurrentaddress(credentials.Adress)
        TextBox.fillpermanentAddress(credentials.rAdress)
        TextBox.submit()
        TextBox.provee() 
    })  
})

// Viva España
