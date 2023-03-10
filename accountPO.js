class AccountPO {
    elements = {
        buttonAccount: () => cy.get('#ACCOUNT'),
        modalAccountButton: () => cy.get('#accountModalLabel').contains('ACCOUNT'),
        CustomerLogin: () => cy.get('#custumerlogin').should('be.visible'),
        CustomerSignup: () => cy.get('#customersignup').should('be.visible'),
        AgentLogin: ()=> cy.get('#agentlogin').should('be.visible'),
        AgentSignup: () => cy.get('#agentsignup').should('be.visible'),
        SupplierLogin: () => cy.get('#supplierlogin').should('be.visible'),
        SupplierSignup: () => cy.get('#suppliersignup').should('be.visible')
    }
    buttonAccountClick() {
        return this.elements.buttonAccount()
    }
    modalAccount() {
        return this.elements.modalAccountButton()
    }
    customerLog() {
        return this.elements.CustomerLogin()
    }
    customerSign() {
        return this.elements.CustomerSignup()
    }
    agentLog() {
        return this.elements.AgentLogin()
    }
    agentSign() {
        return this.elements.AgentSignup()
    }
    supplierlo() {
        return this.elements.SupplierLogin()
    }
    supplierSign() {
        return this.elements.SupplierSignup()
    }
}
export default accountPO