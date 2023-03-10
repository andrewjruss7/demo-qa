class Textbox 
{

    
    inputFullName(name)
    {

        cy.get('#userName').type(name, {force:true})
        .should('have.value', name)

    }

    inputEmail(email)
    {
            cy.get('#userEmail').type(email, {force:true})
            .should('have.value', email)
    }

    inputCurrentAddress(caddress)
    {

        cy.get('#currentAddress').type(caddress , {force:true})
        .should('have.value', caddress)

    }

    inputPermanentAddress(padress)
    {

        cy.get('#permanentAddress').type(padress , {force:true})
        .should('have.value', padress)

    }

    submitBtn()
    {

        cy.get('#submit').click()

    }

    assertion()
    {

        cy.get('#name').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('#currentAddress').should('be.visible')
        cy.get('#permanentAddress').should('be.visible')

        
    }


}


export default Textbox