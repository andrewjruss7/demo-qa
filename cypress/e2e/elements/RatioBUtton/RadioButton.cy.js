import RadioPO from "./RadioButton"

describe("RadioButton test", () =>{
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })

    beforeEach(()=>{
        cy.visit(Cypress.env("baseUrl"))
        cy.url().should('include', Cypress.env("baseUrl"))
    
        cy.get('h5').contains('Elements').click({force:true})
    })
    
    it("RadioButton Yes", () =>{
    const RadBut = new RadioPO
  
        RadBut.radioButton()
        RadBut.verifyMaint()
        RadBut.clickYes()
    })
    it("RadioButton impressive", () =>{
    const RadBut = new RadioPO
      
        RadBut.radioButton()
        RadBut.verifyMaint()
        RadBut.clickimpressive()
    })

     it("RadioButton impressive", () =>{
    const RadBut = new RadioPO
          
        RadBut.radioButton()
        RadBut.verifyMaint()
        RadBut.clickNo()
    })
    
})  