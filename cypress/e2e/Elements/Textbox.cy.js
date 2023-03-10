
describe('Text Box', function () {
    it('text box', function () {
        cy.visit(("https://demoqa.com/")); // Agregar el visit desde el metodo beforeEach
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get("h5").contains("Elements").click()

        cy.get("div[class='element-list collapse show'] li[id='item-0'] span[class='text']").click(), // Quitar coma, esta de mas y el xpath es mala practica.

        cy.get('#userName').type('isela maria'); // Agregar los datos desde fixture. 
        cy.get('#userEmail').type('isela@maria.com');
        cy.get('#currentAddress').type('Paris');
        cy.get('#permanentAddress').type('Francia');

        cy.get('#submit').click(); // Agregar los selectores desde el archivo PO
    })
})

// y para finalizar agrega este codigo como un comando que pueda ser reutilizable, tu puedess Iseee!!! 