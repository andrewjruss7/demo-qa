import Button from "./Buttons"

describe("Pruebas del elemento botón", ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
beforeEach(() =>{
    cy.visit(Cypress.env("baseUrl"))
    cy.url().should('include', Cypress.env('baseUrl'))
    cy.get('h5').contains('Elements').click({force:true})
    cy.get('#item-4').click({force:true})
    })
/*it("Prueba de doble click izquierdo", () =>{
const Clickdlb = new Button

    Clickdlb.clickButton2Click()
})*/
/*it("Prueba de click derecho", () =>{
    const ClickR = new Button

    ClickR.clickButtonRClick()
})*/
it("Prueba de click izquierdo", () =>{
    const ClickL = new Button

    ClickL.clickButton()
})
})