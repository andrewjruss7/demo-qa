class Links{
    Home= "#simpleLink"
    HomeafStY= "#dynamicLink"
    Created = "#created"
    NoContent = "#no-content"
    Moved = "#moved"
    BadRequest= "#bad-request"
    Unauthorized= "#unauthorized"
    Forbidden= "#forbidden"
    NotFound= "#invalid-url"
    Response = "#linkResponse"

clickHome () {
    cy.get(this.Home).click({force:true})
    cy.url().should('include', Cypress.env('baseUrl'))
}
clickHomeafStY () {
    cy.get(this.HomeafStY).click({force:true})
    cy.url().should('include', Cypress.env('baseUrl'))
}
clickCreated () {
    cy.get(this.Created).click({force:true})
    cy.get(this.Response).should('contain', '201').should('contain','Created')
}
clickNoContent () {
    cy.get(this.NoContent).click({force:true})
    cy.get(this.Response).should('contain', '204').should('contain','No Content')
}
clickMoved () {
    cy.get(this.Moved).click({force:true})
    cy.get(this.Response).should('contain', '301').should('contain','Moved')
}
clickBadRequest() {
    cy.get(this.BadRequest).click({force:true})
    cy.get(this.Response).should('contain', '400').should('contain','Bad Request')
}
clickUnauthorized() {
    cy.get(this.Unauthorized).click({force:true})
    cy.get(this.Response).should('contain','401').should('contain','Unauthorized')
}
clickForbidden() {
    cy.get(this.Forbidden).click({force:true})
    cy.get(this.Response).should('contain','403').should('contain','Forbidden')
}
clickNotFound() {
    cy.get(this.NotFound).click({force:true})
    cy.get(this.Response).should('contain','404').should('contain','Not Found')
}
}
export default Links;