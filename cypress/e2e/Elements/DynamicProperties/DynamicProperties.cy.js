import DynamicPropertiesPO from "./DynamicPropertiesPO";

const dynamicProperties = new DynamicPropertiesPO();
let txtcolor;

describe("Dynamic Properties trial",  () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.url().should('include', Cypress.env('baseUrl'));
    })

    it("Button properties test", () => {
        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false
        })

        dynamicProperties.textH5Mtd().click();
        dynamicProperties.btnDynamicPMtd().click();

        dynamicProperties.btnEnableMtd().should('be.disabled');
        dynamicProperties.btncolorChangeMtd().invoke('css', 'color').then((color) => {
            txtcolor = color;
        });
        cy.wait(5000);
        dynamicProperties.btnEnableMtd().should('be.enabled');
        dynamicProperties.btnvisibleAfterMtd().should('be.visible');
        dynamicProperties.btncolorChangeMtd().invoke('css', 'color').then((color) => {
            expect(color).not.to.equal(txtcolor);
        });
        
    })
})