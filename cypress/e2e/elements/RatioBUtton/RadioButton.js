
class RadioPO 
{
        radioButtn = "#item-2"
        maintitle = '.main-header'
        yesRadio= '#yesRadio'
        proveeYes= '.text-success'
        impressiveRadio= '#impressiveRadio'
        proveeimp= '.text-success'
        noRadio= '#noRadio'

    radioButton () 
    {
        cy.get(this.radioButtn).click({force:true})

    }
    verifyMaint () 
    {
        cy.get(this.maintitle).contains('Radio Button')
    }
    clickYes () 
    {
        cy.get(this.yesRadio).check({force:true})
        cy.get(this.proveeYes).contains('Yes')
    }
    clickimpressive () 
    {
        cy.get(this.impressiveRadio).check({force:true})
        cy.get(this.proveeimp).contains('Impressive')
    }
    clickNo() 
    {
    cy.get(this.noRadio).should('be.disabled')
    }
}

    export default RadioPO;
