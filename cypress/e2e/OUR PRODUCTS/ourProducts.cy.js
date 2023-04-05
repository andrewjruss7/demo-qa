describe("Pruebas de la sección our product", ()=>{
   beforeEach(()=>{
    cy.LogIn()
})
it("Verificar que al ingresar al producto de su elección, entre de manera correcta y muestre estos elementos", ()=>{
    cy.get("#speakersTxt").click()
    cy.get("#20").click()
    cy.get("#Description >.roboto-regular").should('contain', 'SPEAKER')
    cy.go('back')
    cy.get("#25").click()
    cy.get("#Description >.roboto-regular").should('contain', 'SPEAKER')
    cy.go('back')
    cy.get("#23").click()
    cy.get("#Description >.roboto-regular").should('contain', 'SPEAKER')
}) 
it.only("Verificar que el filtro de pesos distribuya los productos", ()=>{
    cy.get("#speakersTxt").click()
    cy.get("#accordionAttrib2").click()
    cy.get('label[for="weight_4"]').click()
    cy.get("#21").click()
    cy.get('label[class="value ng-binding"]').should('contain','1.26 lb')
})
})