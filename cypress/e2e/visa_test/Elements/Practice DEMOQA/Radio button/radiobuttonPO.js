class RadioButton
{

    checkYes()
    {

        cy.get('#yesRadio').check({force:true}).should('be.checked')
        cy.get('#impressiveRadio').should('not.be.checked')

    }

    checkImpressive()
    {

        cy.get('#impressiveRadio').check({force:true}).should('be.checked')
        cy.get('#yesRadio').should('not.be.checked')

    }

}

export default RadioButton