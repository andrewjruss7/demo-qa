import Links from "./Links"

describe ("pruebas de links y Api", ()=>{
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
beforeEach(() =>{
    cy.visit(Cypress.env("baseUrl"))
    cy.url().should('include', Cypress.env('baseUrl'))
    cy.get('h5').contains('Elements').click({force:true})
    cy.get('#item-5').click({force:true})  
})
/*it("prueba de link home", () =>{
    const Clicking = new Links
    Clicking.clickHome()
})
it("prueba de link home secundario", () =>{
    const Clicking = new Links
    Clicking.clickHomeafStY()
})*/

it("prueba de API elemento creado", () =>{
    const ClickApi = new Links
    ClickApi.clickCreated()
})
it("prueba de API sin contenido", () =>{
    const ClickApi = new Links
    ClickApi.clickNoContent()
})
it("prueba de API link removido", () =>{
    const ClickApi = new Links
    ClickApi.clickMoved()
})
it("prueba de API con mala solicitud", () =>{
    const ClickApi = new Links
    ClickApi.clickBadRequest()
})
it("prueba de API sin autorización", () =>{
    const ClickApi = new Links
    ClickApi.clickUnauthorized()
})
it("prueba de API no encontrado", () =>{
    const ClickApi = new Links
    ClickApi.clickNotFound()
})

})
