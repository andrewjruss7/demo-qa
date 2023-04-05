describe("Pruebas de sección sign up", ()=>{
    beforeEach( function() { // Antes de cada prueba ejecuta el código siguiente:
        // Visitando el sitio web de pruebas
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should('include', Cypress.env("baseUrl"))
        
    });
    it("Verificar la correcta creación de una cuenta", ()=>{
        const credentials = require('../../fixtures/example.json')

        cy.get("#hrefUserIcon").click()
        cy.get('a[class="create-new-account ng-scope"]').click()
        cy.get('#register_btnundefined').should('be.disabled')
        cy.get('input[name="usernameRegisterPage"]').type(credentials.user)
        cy.get('input[name="emailRegisterPage"]').type(credentials.email)
        cy.get('input[name="passwordRegisterPage"]').type(credentials.pass)
        cy.get('input[name="confirm_passwordRegisterPage"]').type(credentials.passw, {force:true})
        cy.get('input[name="first_nameRegisterPage"]').type(credentials.name)
        cy.get('input[name="last_nameRegisterPage"]').type(credentials.lname)
        cy.get('input[name="phone_numberRegisterPage"]').type(credentials.phone)
        cy.get('select[name="countryListboxRegisterPage"]').select('Colombia')
        cy.get('input[name="cityRegisterPage"]').type(credentials.city)
        cy.get('input[name="addressRegisterPage"]').type(credentials.address)
        cy.get('input[name="state_/_province_/_regionRegisterPage"]').type(credentials.state, {force:true})
        cy.get('input[name="postal_codeRegisterPage"]').type(credentials.postal)
        cy.get('input[name="i_agree"]').click()
        cy.get('#register_btnundefined').should('be.enabled')
        cy.get('#register_btnundefined').click()
        cy.get('#menuUserLink', {timeout:4000}).should('contain',credentials.user)
        
})
})