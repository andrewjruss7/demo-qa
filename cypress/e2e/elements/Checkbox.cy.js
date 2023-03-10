import CheckPage from "./Checkbox"

describe("Prueba de caja", ()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    beforeEach(()=>{
        cy.visit(Cypress.env("baseUrl"))
        cy.url().should('include', Cypress.env("baseUrl"))
        
        cy.get('div[class=category-cards] div:nth-child(1) div:nth-child(1) div:nth-child(3)').click({force:true})
    })
    it("click a Check Box",()=>{
        const check = new CheckPage

        check.buttonCheck()
        check.toggle()
        check.toggle2()

    
    
    
    })

})