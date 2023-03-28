import "cypress-file-upload";
import Updown from "./updown";

describe("Pruebas de broken Link", ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    beforeEach(()=>{
        cy.DemoQA()
        cy.get("#item-7").click()
    })
it("File upload", ()=>{
    const clickUpload = new Updown
    clickUpload.clickUploadButton().attachFile('test1.jpeg')
    cy.wait(3000)
    clickUpload.getVerifyUpload().should("contain",'test1.jpeg')
})    
it.only("File upload - Drag and drop", ()=>{
    const clickUpload = new Updown
    clickUpload.clickUploadButton().attachFile("test1.jpeg", {subjectType:'drag-n-drop'});
    cy.wait(10000)
    clickUpload.getVerifyUpload().should("contain",'test1.jpeg')
})    
/*it("Upload multiple files", ()=>{
    const clickUpload = new Updown
    clickUpload.clickUploadButton().attachFile('[test1.jpeg','test2.jpeg'])
    cy.wait(3000)
    clickUpload.getVerifyUpload().should("contain",'Files You selected')
})    */
it("file download", ()=>{
    const clickDownload = new Updown
    clickDownload.clickdownloadButton().click()
    cy.readFile("cypress/downloads/sampleFile.jpeg")
    cy.verifyDownload("sampleFile.jpeg")
})    
})