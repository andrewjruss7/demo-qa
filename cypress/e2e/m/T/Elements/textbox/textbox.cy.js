import TextboxPO from "./textboxPO";

describe('test01', () => {
    it('test001', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit("https://demoqa.com/") // Esto debe ir en el método beforeEach, Andrew.

        const text = new TextboxPO();

        cy.wait(5000) // Eliminar este tiempo, Andrew. 
        text.buttonElemen().click();
        text.buttontextb().click();
        text.completeName().type("ivonne").should("have.value", "ivonne"); // Agrega el usuario desde la carpeta de fixture
        text.email().type("ivonne@gmail.com").should("have.value", "ivonne@gmail.com");
        text.curAdress().type("adress").should("have.value", "adress");
        text.permAdress().type("perAdress").should("have.value", "perAdress");
        text.buttonSub().click()

        cy.get("#name").should('be.visible'),
            cy.get('#email').should('be.visible'),
            cy.get('#currentAddress').should('be.visible'),
            cy.get('#permanentAddress').should('be.visible')
    })
})