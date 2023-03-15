import CheckPage from "./Checkbox"

describe("Prueba de caja", ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    beforeEach(()=>{
        cy.DemoQA()
        const check = new CheckPage
        check.clickCheck()
    }) 
    /*it("Verficar que se checkeen todas por el home",()=>{
        const check = new CheckPage

        check.clickHomeToggle()
        check.clickHomeCheck()
    })*/

    it("desplegar carpetas y seleccionar documento NOTES",()=>{
        const check = new CheckPage

        check.clickHomeToggle()
        check.clickDesktopToggle()
        check.clickDocumentsToggle()
        check.clickDownloadsToggle()
        check.clickNotesCheck()
        check.verifyResult()

    })

})