class RadioButtonPO{

    elements = {
        textH5 : () => cy.get('h5').contains('Elements'),
        btnRadioButton : () => cy.get('#item-2'),
        yesRadio : () => cy.get('#yesRadio'),
        impressiveRadio : () => cy.get('#impressiveRadio'),
        noRadio : () => cy.get('#noRadio'),
        spanTextSuccess : () => cy.get('.text-success')
    }
    textH5Mtd(){
        return this.elements.textH5();
    }
    btnRadioButtonMtd(){
        return this.elements.btnRadioButton();
    }
    yesRadioMtd(){
        return this.elements.yesRadio();
    }
    impressiveRadioMtd(){
        return this.elements.impressiveRadio();
    }
    noRadioMtd(){
        return this.elements.noRadio();
    }
    spanTextSuccessMtd(){
        return this.elements.spanTextSuccess();
    }


    Asserts = {
        assertSpanText : () => this.spanTextSuccessMtd()
    }
    assertSpanTextMtd(text){
        return this.Asserts.assertSpanText().should('contain', text)
    }
}

export default RadioButtonPO