import Broken from "./blPO";

describe("Pruebas de broken Link", ()=>{
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
beforeEach(()=>{
    cy.DemoQA()
})
it("Prueba de link válido", ()=>{
    const Validate = new Broken
    Validate.clickBrokenLinks()
    Validate.clickValidL()
    Validate.ValidateVP()
})
it("Prueba de link roto", ()=>{
    const Validate = new Broken
    Validate.clickBrokenLinks()
    Validate.clickBlink()
    Validate.ValidateBP()
})
})