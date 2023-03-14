import UDPO from "./UploadDownloadPO";
import 'cypress-file-upload';

const ud = new UDPO();
const image = 'image.jpg'

describe('Download and Upload trial', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.url().should('include', Cypress.env('baseUrl'));
    })

    it('Download and upload test', () => {

        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false
        })
        ud.textH5Mtd().click();
        ud.btnUDMtd().click();

        //ud.btnDownloadMtd().click();

        ud.btnUploadMtd().attachFile(image);
        ud.assertFilePathMtd(image);
        
    })
})