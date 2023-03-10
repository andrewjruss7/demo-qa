import TextboxPO from "./textboxPO";

describe('test01', () => {
    
    beforeEach( function() {
        cy.visit("https://demoqa.com/");
        cy.url().should('include', 'https://demoqa.com/');
        cy.fixture('textbox.json').as('Textboxdata');
    });
    it('test001', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        const text = new TextboxPO();


        text.buttonElemen().click();
        text.buttontextb().click();
        text.completeName().type(this.Textboxdata.name).should("have.value", "ivonne"); // Agrega el usuario desde la carpeta de fixture
        text.email().type(this.Textboxdata.email).should("have.value", "ivonne@gmail.com");
        text.curAdress().type(this.Textboxdata.currentAddress).should("have.value", "adress");
        text.permAdress().type(this.Textboxdata.permanentAddress).should("have.value", "perAdress");
        text.buttonSub().click()

        cy.get("#name").should('be.visible'),
            cy.get('#email').should('be.visible'),
            cy.get('#currentAddress').should('be.visible'),
            cy.get('#permanentAddress').should('be.visible')
    })
}) 

// Busca en Chatgpt3 como identar el codigo en visual studio code en ubuntu. Identar es organizar el codigo.
// Se te revento 💩