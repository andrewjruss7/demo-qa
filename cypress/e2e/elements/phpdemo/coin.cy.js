describe("casos de pruebas de moneda en la página", ()=>{

before("Entrar a la página", ()=>{
   cy.visit(Cypress.env('baseUrl'))
   cy.url().should('include','phptravels')
})
/*it("Verificar que el número de monedas", () =>{
    cy.get('#currency').contains('USD').click()
    cy.get('#currency > .la').should("have.length", 11)
    cy.wait(6000)
    cy.get('.dropdown-menu li.dropdown-item').its('length').should("eq",11)
})*/
/*it("Validar monedas disponibles", () =>{

    cy.get('#currency').contains('USD').click()
    cy.get('.dropdown-menu li.dropdown-item').should("have.length", 11).then((moneda) =>{

        expect(moneda.eq(0)).to.contain('USD')
        expect(moneda.eq(1)).to.contain('GBP')
        expect(moneda.eq(2)).to.contain('SAR')
        expect(moneda.eq(3)).to.contain('EUR')
        expect(moneda.eq(4)).to.contain('PKR')
        expect(moneda.eq(5)).to.contain('JPY')
        expect(moneda.eq(6)).to.contain('INR')
        expect(moneda.eq(7)).to.contain('CNY')
        expect(moneda.eq(8)).to.contain('TRY')
        expect(moneda.eq(9)).to.contain('RUB')
        expect(moneda.eq(10)).to.contain('IRR')
    })

    })*/

it("Validar cambio de moneda sea correcto", () =>{
    cy.get('#currency').contains('USD').click()
    

    cy.get("#select2-hotels_city-container").click({force: true})
    
    cy.get('.select2-search__field[type="search"]').type("islamabad {enter}").type("{enter}").click({force:true})
    cy.scrollTo('top')


    cy.get('#submit').click({force: true})
    cy.get('document.querySelector("span[class=price__num] small")').contains('USD')

})    
})

