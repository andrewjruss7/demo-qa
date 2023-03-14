import {faker} from "@faker-js/faker";
import TextBoxPO from "./TextBoxPO";

const textBox = new TextBoxPO();

const fakeName = faker.name.fullName(), fakeEmail = faker.internet.email(), fakeAddress = faker.address.street();

describe("List-group Browser",  () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.url().should('include', Cypress.env('baseUrl'));
    })

    it("Properly submit", () => {
        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false
        })

        textBox.textH5Mtd().click();
        textBox.btnTextBoxMtd().click();

        textBox.inputUserNameMtd().type(fakeName).should('have.value',fakeName);
        textBox.inputUserEmailMtd().type(fakeEmail).should('have.value',fakeEmail);
        textBox.txtCurrentAddressMtd().type(fakeAddress).should('have.value',fakeAddress);
        textBox.txtPermanentAddressMtd().type(fakeAddress).should('have.value',fakeAddress);

        textBox.btnSubmitMtd().click();

        textBox.outputMtd().should('be.visible');

        textBox.labelUserNameMtd().contains('Name:'+fakeName);
        textBox.labelUserEmailMtd().contains('Email:'+fakeEmail);
        textBox.labelCurrentAddressMtd().contains('Current Address :'+fakeAddress);
        textBox.labelPermanentAddressMtd().contains('Permananet Address :'+fakeAddress);
    })
})