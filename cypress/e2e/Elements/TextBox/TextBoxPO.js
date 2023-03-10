class TextBoxPO{

    elements = {
        btnTextBox : () => cy.get('#item-0'),
        textH5 : () => cy.get('h5').contains('Elements'),
        inputUserName : () => cy.get('#userName'),
        inputUserEmail : () => cy.get('#userEmail'),
        txtCurrentAddress : () => cy.get('#currentAddress'),
        txtPermanentAddress : () => cy.get('#permanentAddress'),
        btnSubmit : () => cy.get('#submit'),
        output : () => cy.get('#output'),
        labelUserName : () => cy.get('#name'),
        labelUserEmail : () => cy.get('#email'),
        labelCurrentAddress : () => cy.get('.border > #currentAddress'),
        labelPermanentAddress : () => cy.get('.border > #permanentAddress')

    }

    btnTextBoxMtd(){
        return this.elements.btnTextBox();
    }

    textH5Mtd(){
        return this.elements.textH5();
    }

    inputUserNameMtd(){
        return this.elements.inputUserName();
    }

    inputUserEmailMtd(){
        return this.elements.inputUserEmail();
    }

    txtCurrentAddressMtd(){
        return this.elements.txtCurrentAddress();
    }

    txtPermanentAddressMtd(){
        return this.elements.txtPermanentAddress();
    }

    btnSubmitMtd(){
        return this.elements.btnSubmit();
    }

    outputMtd(){
        return this.elements.output();
    }

    labelUserNameMtd(){
        return this.elements.labelUserName();
    }

    labelUserEmailMtd(){
        return this.elements.labelUserEmail();
    }

    labelCurrentAddressMtd(){
        return this.elements.labelCurrentAddress();
    }

    labelPermanentAddressMtd(){
        return this.elements.labelPermanentAddress();
    }
}

export default TextBoxPO;