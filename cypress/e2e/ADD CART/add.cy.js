describe("Pruebas del componente add cart", ()=>{
    beforeEach(()=>{
        cy.LogIn()
}) 
    afterEach(()=>{
    cy.removeAll()
}) 

it("Validar que todo el proceso de compra de un producto funcione correctamente", ()=>{
    cy.get("#speakersTxt").click()
    cy.get("#20").click()
    cy.get("#Description >.roboto-regular").should('contain', 'SPEAKER')
    cy.get('span[title="GRAY"]').click()
    cy.get('button[name="save_to_cart"]').click()
    cy.get('#menuCart').click()
    cy.get('label[class="roboto-regular productName ng-binding"]').should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')

})
it("Validar que todo el proceso de compra de un producto se pueda modificar la cantidad de productos", ()=>{
    cy.get("#speakersTxt").click()
    cy.get("#20").click()
    cy.get("#Description >.roboto-regular").should('contain', 'SPEAKER')
    cy.get('span[title="GRAY"]').click()
    cy.get('input[name="quantity"]').type(3)
    cy.get('button[name="save_to_cart"]').click()
    cy.get('#menuCart').click()
    cy.get('label[class="roboto-regular productName ng-binding"]').should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')
})

it("Validar que todo el proceso de compra de un producto se pueda modificar la cantidad en el carrito", ()=>{
    cy.get("#speakersTxt").click()
    cy.get("#20").click()
    cy.get("#Description >.roboto-regular").should('contain', 'SPEAKER')
    cy.get('span[title="GRAY"]').click()
    cy.get('input[name="quantity"]').type(3)
    cy.get('button[name="save_to_cart"]').click()
    cy.get('#menuCart').click()
    cy.get('a[class="edit ng-scope"]').click()
    cy.get('div[class="minus"]').dblclick()
    cy.get('button[name="save_to_cart"]').click()
    cy.get('label[class="roboto-regular productName ng-binding"]').should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')
})
it("Validar que al dar click en el botón remove de un producto este se elimine", ()=>{
    cy.get("#speakersTxt").click()
    cy.get("#20").click()
    cy.get("#Description >.roboto-regular").should('contain', 'SPEAKER')
    cy.get('span[title="GRAY"]').click()
    cy.get('input[name="quantity"]').type(3)
    cy.get('button[name="save_to_cart"]').click()
    cy.get('#menuCart').click()
    cy.get('a[class="remove red ng-scope"]').click()
    cy.get('label[class="roboto-bold ng-scope"]').should('contain','Your shopping cart is empty')
})
it("Validar que se pueden agregar más de 1 producto al carrito", ()=>{
    cy.get("#speakersTxt").click()
    cy.get("#20").click()
    cy.get('span[title="GRAY"]').click()
    cy.get('button[name="save_to_cart"]').click()

    cy.get('span[class="logoDemo roboto-light ng-binding"]').click()
    cy.get("#miceTxt").click()
    cy.get("#31").click()
    cy.get('input[name="quantity"]').type(3)
    cy.get('button[name="save_to_cart"]').click()
    cy.get('#menuCart').click()
    cy.get('label[class="roboto-regular productName ng-binding"]').should('contain','LOGITECH G502 PROTEUS CORE')
})
})
/*
Paso 2. Agregar el producto a comprar
Paso 3. Dar click en el botón "SHOPPING CART"
Paso 3: Verificar que se encuentre en orden el pedido con su producto, número de items, colores y precio.
Paso 4: Click en "CHECK OUT" y  verificar datos del envío.
Paso 5: Click en "NEXT", rellenar información:
-SafePay username
-SafePay password
Paso 6: Click en "PAY NOW"
Paso 7. Verificar la compra hecha y el título "Thank you for buying with Advantage"
*/