class CheckPage{
            
    buttonCheck (){
        const button =  cy.get('#item-1')
        button.click({force:true})
    }
   
    toggle() {
    const toggle= cy.get('button[title=Toggle]')
    toggle.click({force:true})
    
    }
    toggle2() {
        const toggle = cy.get('.rct-node rct-node-parent rct-node-collapsed li')
        toggle.first().click()
        
    }
    fillCurrentaddress(value) {
    const caddress = cy.get('[id=currentAddress]')  
    caddress.type(value)
    return this
    }
    fillpermanentAddress (value) {
    const paddress = cy.get('[id=permanentAddress]')
    paddress.type(value)
    return this
    }  
    submit (){
    const button = cy.get('[id=submit]')
    button.click({force:true})
    }
}

export default CheckPage