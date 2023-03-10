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

        radioButton.yesRadioMtd().check({force:true});
        radioButton.yesRadioMtd().should('be.checked');
        radioButton.spanTextSuccessMtd().contains('Yes');
        radioButton.noRadioMtd().should('be.disabled');

        radioButton.impressiveRadioMtd().check({force:true});
        radioButton.impressiveRadioMtd().should('be.checked');
        radioButton.spanTextSuccessMtd().contains('Impressive');
        radioButton.noRadioMtd().should('be.disabled')
    })

})