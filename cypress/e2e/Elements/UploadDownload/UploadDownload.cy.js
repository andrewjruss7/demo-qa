import UDPO from "./UploadDownloadPO";

const up = new UDPO();

describe('Download and Upload trial', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.url().should('include', Cypress.env('baseUrl'));
    })

    it('Download and upload test', () => {

        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false
        })
        up.textH5Mtd().click();
        up.btnUDMtd().click();

        up.btnDownloadMtd().click();
        cy.readFile('path/to/downloaded/file').should('exist')


        
    })
})