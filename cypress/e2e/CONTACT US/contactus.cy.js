describe("Pruebas de sección Contact Us", ()=>{
    beforeEach(()=>{
        cy.LogIn()
})   
it("Validar que al tratar de contactarse con empresa, te genere un mensaje de enviado el mensaje", ()=>{
    cy.get('#send_btnundefined').should('be.disabled')
    cy.get("select[name='categoryListboxContactUs']").select("Laptops")
    cy.get('select[name="productListboxContactUs"]').select("HP Chromebook 14 G1(ES)")
    cy.get('input[name="emailContactUs"]').type("cdmpo@gil.com")
    cy.get('textarea[name="subjectTextareaContactUs"]').type("im really interested in the weight and the processor that this version have")
    cy.get('#send_btnundefined').should('be.enabled').click()
    cy.get('a[class="a-button ng-binding"]').should('contain','CONTINUE SHOPPING')
})
it("Validar que al tratar de contactarse con empresa con un correo no válido, no permita enviar el mensaje", ()=>{ //revisar, acepta cualquier escrito en el correo
    cy.get('#send_btnundefined').should('be.disabled')
    cy.get("select[name='categoryListboxContactUs']").select("Laptops")
    cy.get('select[name="productListboxContactUs"]').select("HP Chromebook 14 G1(ES)")
    cy.get('input[name="emailContactUs"]').type("cdmpogilcom")
    cy.get('textarea[name="subjectTextareaContactUs"]').type("im really interested in the weight and the processor that this version have")
    cy.get('#send_btnundefined').should('be.enabled').click()
    cy.get('a[class="a-button ng-binding"]').should('contain','CONTINUE SHOPPING')
}) 
})
/*Paso 1: Visitar la página https://www.advantageonlineshopping.com/#/
Paso 2: Dar click en el botón"Contact US"
Paso 3:
Seleccionar el tipo de producto.
Paso 4:
Seleccionar el producto especifico. 
Paso 5:
Ingresar un correo donde se pueda enviar la información.
Paso 6:
Dar  click en el recuadro 'Subject', rellenar con la información que se desea obtener del producto. 
Paso 7:
Dar click en Send.
Paso 8:
Obtener respuesta "Thank you for contacting Advantage support"
*/