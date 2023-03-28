class Broken 
{  
    BrokenLinks = '#item-6'
    ValidLink= "a[href='http://demoqa.com']"
    BLink= "a[href='http://the-internet.herokuapp.com/status_codes/500']"
    ValidPage= "a[href='https://demoqa.com']"
    BPage= "#content"
   
clickBrokenLinks(){
    cy.get(this.BrokenLinks).click({force:true})
    }
clickValidL (){
    cy.get(this.ValidLink).click({force:true})
}
clickBlink () {
    cy.get(this.BLink).click({force:true})
}
ValidateVP (){
    cy.get(this.ValidPage).url().should('include',"demoqa.com")
}
ValidateBP (){
    cy.get(this.BPage).should('contain', "This page returned a 500 status code.")
}
}
export default Broken;