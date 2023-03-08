describe("casos de pruebas de moneda en la página", ()=>{

Before("Entrar a la página", ()=>{
   cy.visit(Cypress.env('baseUrl'))
   cy.url().should('include','phptravels')
})
it("Verificar que el número de monedas", () =>{
    cy.get('#currency').contains('USD').click()
    cy.get('.dropdown-menu show[aria-labelledby="currency"]').should("have.length", 11)
    cy.get('.dropdown-menu show[aria-labelledby="currency"]').its('length').should("eq",11)
})
it("Validar monedas disponibles", () =>{

    cy.get('#currency').contains('USD').click()
    cy.get('.dropdown-menu show[aria-labelledby="currency"]').should("have.length", 11).then((moneda) =>{

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

    })

it("Validar cambio de moneda sea correcto", () =>{
    cy.get('#currency').contains('USD').click()
    cy.get('.dropdown-item waves-effect[href="https://phptravels.net/currency-USD"]').contains("USD").click()

    cy.get("#select2-hotels_city-container").click()
    cy.get("#select2-hotels_city-container").type("islamaba").and({enter})
    cy.get("checkout").click()

    cy.get('document.querySelector("body > div:nth-child(29) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2)")').click()
    
    cy.get('.dropdown-toggle dropdown-btn travellers waves-effect[aria-expanded="false"]').click()
    cy.get('#submit').click()
    cy.get('document.querySelector("span[class=price__num] small")').contain('USD')

})    
})

