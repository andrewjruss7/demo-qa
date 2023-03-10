import Textbox from "./textbox";
describe('Test Textbox', () => { 
    beforeEach(()=> {
        cy.visit(Cypress.env("baseUrlDemoQA"));
        cy.url().should('include', Cypress.env("baseUrlDemoQA"));

        cy.get('div[class="category-cards"] div:nth-child(1) div:nth-child(1) div:nth-child(3)').click() // what's???? mala practica escoger un Xpath
        cy.get('.main-header').should('have.text', 'Elements')

        cy.get( "div[class='element-list collapse show'] li[id='item-0'] span[class='text']") // Mismo, el path no es buena practica. 
        .click()
    })

    it('Textbox test', () => {

       Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

     const ln = new Textbox() ; // Debes cambiar el nombre de la variable, para tener buenas practicas en la semantica. 
            ln.inputFullName('Luis Penagos')      // Agrega estos valores desde el fixture
            ln.inputEmail('test@test.com')          
            ln.inputCurrentAddress('Kra 27 # 17 B 05')          
            ln.inputPermanentAddress('Cll 29 c Sur # 41 - 34')           
            ln.submitBtn()
            ln.assertion()
    })
})

// Me voy a ir a vivir a Canadá
