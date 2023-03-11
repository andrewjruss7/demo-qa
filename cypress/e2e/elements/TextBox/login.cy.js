import LoginPO from "./loginPO"

describe("Prueba de texto", ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
        beforeEach(()=>{
        cy.visit(Cypress.env("baseUrl"))
        cy.url().should('include', Cypress.env("baseUrl"))
        
        cy.get('h5').contains('Elements').click({force:true})
    })/*  
        it("ingresar datos correctamente a text Box",()=>{
        const TextBox = new LoginPO
        const credentials = require('../../../fixtures/example.json')
                         
        TextBox.buttonText()
        TextBox.fillName(credentials.name)
        TextBox.fillEmail(credentials.email)
        TextBox.fillCurrentaddress(credentials.Adress)
        TextBox.fillpermanentAddress(credentials.rAdress)
        TextBox.submit()
        TextBox.provee() 
        TextBox.proveeEmail()
    })*/
    
    it("No ingresar datos a text Box",()=>{
        const TextBox = new LoginPO
        const credentials = require('../../../fixtures/example.json')
                          
        TextBox.buttonText()
        TextBox.fillName(" ")
        TextBox.fillEmail(" ")
        TextBox.fillCurrentaddress(" ")
        TextBox.fillpermanentAddress(" ")
        TextBox.submit()
        TextBox.provee() 


    }) /*
        it("ingresar nombre incorrecto a text Box",()=>{
        const TextBox = new LoginPO
        const credentials = require('../../../fixtures/example.json')
                  
        TextBox.buttonText()
        TextBox.fillName(credentials.nameFail)
        TextBox.fillEmail(credentials.email)
        TextBox.fillCurrentaddress(credentials.Adress)
        TextBox.fillpermanentAddress(credentials.rAdress)
        TextBox.submit()
        TextBox.provee() 
        TextBox.proveeEmail()
    })
    it("ingresar correo incorrecto a text Box",()=>{
        const TextBox = new LoginPO
        const credentials = require('../../../fixtures/example.json')
                  
        TextBox.buttonText()
        TextBox.fillName(credentials.name)
        TextBox.fillEmail(credentials.emailFail)
        TextBox.fillCurrentaddress(credentials.Adress)
        TextBox.fillpermanentAddress(credentials.rAdress)
        TextBox.submit()
        cy.get("#output").should("not.be.visible")
    }) 
        it("ingresar Current address incorrecto a text Box",()=>{
        const TextBox = new LoginPO
        const credentials = require('../../../fixtures/example.json')
                  
        TextBox.buttonText()
        TextBox.fillName(credentials.name)
        TextBox.fillEmail(credentials.email)
        TextBox.fillCurrentaddress(credentials.AdressFail)
        TextBox.fillpermanentAddress(credentials.rAdress)
        TextBox.submit()
        TextBox.provee() 
        TextBox.proveeEmail()
    })*/
})
