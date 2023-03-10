    
describe ('Text Box', function(){
    it('text box', function() { 
        cy.visit(("https://demoqa.com/"));

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        
    
cy.get("h5").contains("Elements").click()

cy.get("div[class='element-list collapse show'] li[id='item-0'] span[class='text']").click(),

cy.get('#userName').type('isela maria');
cy.get('#userEmail').type('isela@maria.com');
cy.get('#currentAddress').type('Paris');
cy.get('#permanentAddress').type('Francia');

cy.get('#submit').click();

})
})
