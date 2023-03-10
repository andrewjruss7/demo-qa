class CheckboxAll 
{

    getCheckbox()
    {

        cy.get('.rct-icon.rct-icon-uncheck').click()

    }

    getExpand()
    {

        cy.get('.rct-icon.rct-icon-expand-close').click()

    }

    getExpandAll()
    {

        cy.get('.rct-icon.rct-icon-expand-all[height="1em"]').click()

    }
}
export default CheckboxAll

