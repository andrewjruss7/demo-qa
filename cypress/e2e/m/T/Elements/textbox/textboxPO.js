class TextboxPO {
    
    elements = {
        buttonElements: () => cy.get("h5").contains('Elements'),
        buttonTextbx: () => cy.get("#item-0"),
        fullName: () => cy.get("#userName"),
        emailWriting: () => cy.get("#userEmail"),
        currentAdress: () => cy.get("#currentAddress"),
        permanentAdress: () => cy.get("#permanentAddress"),
        buttonSubmit: () => cy.get('#submit')
    }
    buttonElemen() {
        return this.elements.buttonElements()
    }
    buttontextb() {
        return this.elements.buttonTextbx()
    }
    modalText() {
        return this.elements.modalTextButton()
    }
    completeName() {
        return this.elements.fullName()
    }
    email() {
        return this.elements.emailWriting()
    }
    curAdress() {
        return this.elements.currentAdress()
    }
    permAdress() {
        return this.elements.permanentAdress()
    }
    buttonSub() {
        return this.elements.buttonSubmit()
    }
}
export default TextboxPO