import RadioButtonPO from "./RadioButtonPO"

const radioButton = new RadioButtonPO()

describe("RadioButton trial",() => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.url().should('include', Cypress.env('baseUrl'));
    })

    it('RadioButton YES, IMPRESSIVE check', () => {
        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false
        })
        radioButton.textH5Mtd().click();
        radioButton.btnRadioButtonMtd().click();

        radioButton.yesRadioMtd().check({force:true})
        radioButton.noRadioMtd().should('be.disabled')
        radioButton.assertSpanTextMtd('Yes')

        radioButton.impressiveRadioMtd().check({force:true})
        radioButton.noRadioMtd().should('be.disabled')
        radioButton.assertSpanTextMtd('Impressive')
    })

})