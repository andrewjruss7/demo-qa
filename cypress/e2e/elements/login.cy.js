import LoginPO from "./loginPO"

describe("Prueba de texto", ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
        beforeEach(()=>{
        cy.visit(Cypress.env("baseUrl"))
        cy.url().should('include', Cypress.env("baseUrl"))
        
        cy.get('div[class=category-cards] div:nth-child(1) div:nth-child(1) div:nth-child(3)').click({force:true})
    })
        it("ingresar datos a text Box",()=>{
        const login = new LoginPO
                      
        login.buttonText()
        login.fillName("Juan Guevara")
        login.fillEmail("cdmdn@hotmail.com")
        login.fillCurrentaddress("Carrera 27 #17 b05")
        login.fillpermanentAddress("Carrera 27 #17 b05")
        login.submit()
        cy.get("#name").should("be.visible") // Organizar los asserts desde el PO.       
    })  
})

// Viva España
