import ButtonsPO from "./ButtonsPO";

const buttonsPO = new ButtonsPO();

describe("Buttons trial",  () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.url().should('include', Cypress.env('baseUrl'));
    })

    it("Buttons messages", () => {
        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false
        })

        buttonsPO.textH5Mtd().click();
        buttonsPO.btnButtonMtd().click();

        buttonsPO.btnDoubleClickMtd().dblclick();
        buttonsPO.doubleClickMessageMtd().contains('You have done a double click');

        buttonsPO.btnRightClickMtd().rightclick();
        buttonsPO.rightClickMessageMtd().contains('You have done a right click');

        buttonsPO.btnClickMtd().click();
        buttonsPO.dynamicClickMessageMtd().contains('You have done a dynamic click');
          

    })
})