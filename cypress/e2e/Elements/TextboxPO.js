class Texbox {
    elements = {
        buttonElements: () => cy.get("h5"),
        buttonTextBox: () => cy.get("div[class='element-list collapse show'] li[id='item-0'] span[class='text']"),
        fullName: () => cy.get('#userName'),
        emailWriting: () => cy.get('#userEmail'),
        CurrentAddress: () => cy.get('#currentAddress'),
        PermanentAddress: () => cy.get('#permanentAddress'),
        buttonSubmit: () => cy.get('#submit'),
    }

    buttonElements() {
        return this.elements.buttonElements()
    }
    buttonTextBox() {
        return this.elements.buttonTextBox()
    }

    inputfullName() {
        return this.elements.fullName()

    }

    inputemailWriting() {
        return this.elements.emailWriting

    }
    inputCurrentAddress() {
        return this.elements.CurrentAddress
    }
    inputPermanentAddress() {
        return this.elements.PermanentAddress

    }
    inputbuttonSubmit() {
        return this.elements.buttonSubmit

    }
}
