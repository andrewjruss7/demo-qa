describe("Casos de pruebas de idiomas en la página", () => {

    beforeEach(() => {
  cy.visit(Cypress.env('baseUrl'));
  cy.url().should('include','phptravels');
    })

    it("Actualización con lenguaje especifico", () => {
        cy.get("#languages").contains("English").click()
        cy.get(".dropdown-item.waves-effect[href='https://phptravels.net/lang-en']").click({force:true})
        
        cy.get("#ACCOUNT").contains( "ACCOUNT").should("be.visible")

        cy.get("#languages").contains("English").click()
        cy.get(".dropdown-item.waves-effect[href='https://phptravels.net/lang-es']").contains("Spanish").click({force:true})
        cy.get("#ACCOUNT").contains('Cuenta').should("be.visible")
    

    })
    /*
    it('Verificar el número de idiomas', () => {
        cy.get('#languages').click()     
        cy.get('.dropdown-menu show[aria-labelledby="languages"]').should('have.length', 13)
              
        cy.get('.dropdown-menu show[aria-labelledby="languages"]').its('length').should('eq', 13)
      })
      it('Verificar idiomas disponibles', () => {
        cy.get('#languages').click()
        cy.get('.dropdown-menu show[aria-labelledby="languages"]').should('have.length', 13).then((idiomas) => {
      
        expect(idiomas).to.have.length(13)
    
        expect(idiomas.eq(0)).to.contain('Turkish')
        expect(idiomas.eq(1)).to.contain('Russian')
        expect(idiomas.eq(2)).to.contain('philippine')
        expect(idiomas.eq(3)).to.contain('Korean')
        expect(idiomas.eq(4)).to.contain('Khmer')
        expect(idiomas.eq(5)).to.contain('indonesia')
        expect(idiomas.eq(6)).to.contain('French')
        expect(idiomas.eq(7)).to.contain('Spanish')
        expect(idiomas.eq(8)).to.contain('English')
        expect(idiomas.eq(9)).to.contain('German')
        expect(idiomas.eq(10)).to.contain('Chinese')
        expect(idiomas.eq(11)).to.contain('Português')
        expect(idiomas.eq(12)).to.contaim('Arabic')


      })
    })

      it('Validar que conserve el idioma seleccionado al pasar entre componentes', () => {
        cy.get("#languages").click()
        cy.get(".flag-icon flag-icon-es mr-1").contains("Spanish").click()
        cy.get(".active_flights waves-effect").contains("vuelos").click()
        cy.get("autocomplete").contains("Volando desde").should("be.visible")

    })
    it('Validar que conserve el idioma seleccionado al actulizar la página', () => {
        cy.get("#languages").click()
        cy.get(".flag-icon flag-icon-es mr-1").contains("Spanish").click()
        cy.reload()
        cy.get("#ACCOUNT").contains('Cuenta').should("be.visible")
    })

    it("Validar que conserve el idioma al cerrar y abrir la página", () =>{
        cy.get('#languages').click()
        cy.get(".flag-icon flag-icon-es mr-1").contains("Spanish").click()
        
        cy.window().then(pagina)
        pagina.close()

        visit.Cypress.env('baseUrl')

        cy.get("#ACCOUNT").contains('Cuenta').should("be.visible")

        })*/
    
})

