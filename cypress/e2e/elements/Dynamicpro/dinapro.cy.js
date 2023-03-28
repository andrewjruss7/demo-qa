import DynamicProp from "./dinapro";
const dynamicProp = new DynamicProp();

let txtcolor

describe("Pruebas de broken Link", ()=>{
 Cypress.on('uncaught:exception', (err, runnable) => {
 return false
})
 beforeEach(()=>{
    cy.DemoQA()
    dynamicProp.clickbuttonDynamic().click()
})
it("File upload", ()=>{

    dynamicProp.verifybuttonEnable().should('be.disabled');
    dynamicProp.verifybuttoncolor().invoke('css', 'color').then((color) => {
        txtcolor = color;
    });
    cy.wait(5000);
    dynamicProp.verifybuttonEnable().should('be.enabled');
    dynamicProp.verifybuttonvisible().should('be.visible');
    dynamicProp.verifybuttoncolor().invoke('css', 'color').then((color) => {
        expect(color).not.to.equal(txtcolor);
    });
}) 
})
