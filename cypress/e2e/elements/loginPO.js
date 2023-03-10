class LoginPO{
            
    buttonText (){
        const button =  cy.get('#item-0')
        button.click({force:true})
    }
   


    fillName(value) {
    const field = cy.get('#userName')
    field.type(value)
    return this
    }
    fillEmail(value) {
        const field = cy.get('[id=userEmail]')
        field.type(value)
        return this
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

export default LoginPO