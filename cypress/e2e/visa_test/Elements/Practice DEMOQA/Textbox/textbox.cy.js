import Textbox from "./textbox";

describe('Test Textbox', () => { 
    beforeEach(()=> {
      
        cy.visit(Cypress.env("baseUrlDemoQA"));
        cy.url().should('include', Cypress.env("baseUrlDemoQA"));

        cy.get('h5').contains('Elements').click()
        cy.get('.main-header').should('have.text', 'Elements')

        cy.get('#item-0').click()
<<<<<<< HEAD

        


    })

    
=======
    }) 
>>>>>>> 210106c1f41a9a9f63acdd5fb16dd28f7551b914


    it('Textbox test', () => {

<<<<<<< HEAD
       Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.fixture('textBoxData.json').as('userData')
        console.log('userData')

     const inputText = new Textbox() ; // Debes cambiar el nombre de la variable, para tener buenas practicas en la semantica. 
            inputText.inputFullName(this.userData.name)      // Agrega estos valores desde el fixture
            inputText.inputEmail(this.userData.email)          
            inputText.inputCurrentAddress(this.userData.address)          
            inputText.inputPermanentAddress(this.userData.padress)           
            inputText.submitBtn()
            
            cy.get('#name').should('be.visible')
            cy.get('#email').should('be.visible')
            cy.get('#currentAddress').should('be.visible')
            cy.get('#permanentAddress').should('be.visible')
    
=======
        const credentials = require('../../../../../fixtures/textBoxData.json')
        const inputText = new Textbox()  

        
     
        Cypress.on('uncaught:exception', (err, runnable) => {
             return false
         })
     
          ; // Cambia el nombre de la variable para tener buenas prácticas semánticas
        inputText.inputFullName(credentials.name)
        inputText.inputEmail(credentials.email)
        inputText.inputCurrentAddress(credentials.address)
        // inputText.inputPermanentAddress(this.credentials.padress)
         inputText.submitBtn()
     
         cy.get('#name').should('be.visible')
         cy.get('#email').should('be.visible')
         cy.get('#currentAddress').should('be.visible')
         cy.get('#permanentAddress').should('be.visible')
     
     })
     
>>>>>>> 210106c1f41a9a9f63acdd5fb16dd28f7551b914
    })
})

// Me voy a ir a vivir a Canadá
