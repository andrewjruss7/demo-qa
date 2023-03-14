import BrokenPO from "./BrokenPO";

const brokenPO = new BrokenPO();

describe('Links trial', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.url().should('include', Cypress.env('baseUrl'));
    })

    it('Broken links test', () => {

        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false
        })
        brokenPO.textH5Mtd().click();
        brokenPO.btnBrokenMtd().click();

        brokenPO.imgBrokenMtd().should('have.prop', 'naturalWidth').and('eq', 0)
        brokenPO.imgValidMtd().should('have.prop', 'naturalWidth').and('gt', 0)
        brokenPO.validLinkMtd().should('have.attr', 'href').then((href) => {
            cy.request(href).its('status').should('eq', 200);
        })
        brokenPO.BrokenLinkMtd().should('have.attr', 'href').then((href) => {
            cy.request(href).its('status').should('eq', 500);
        });
        
    })
})