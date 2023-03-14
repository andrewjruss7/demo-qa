class ButtonsPO{

    elements = {
        btnButton : () => cy.get('#item-4'),
        textH5 : () => cy.get('h5').contains('Elements'),
        btnDoubleClick : () => cy.get('#doubleClickBtn'),
        btnRightClick : () => cy.get('#rightClickBtn'),
        btnClick : () => cy.get('button').filter((index, element) => {
            return Cypress.$(element).text() === 'Click Me';
        }),
        doubleClickMessage : () => cy.get('#doubleClickMessage'),
        rightClickMessage : () => cy.get('#rightClickMessage'),
        dynamicClickMessage : () => cy.get('#dynamicClickMessage')
    }

    btnButtonMtd(){
        return this.elements.btnButton();
    }

    textH5Mtd(){
        return this.elements.textH5();
    }

    btnDoubleClickMtd(){
        return this.elements.btnDoubleClick();
    }

    btnRightClickMtd(){
        return this.elements.btnRightClick();
    }

    btnClickMtd(){
        return this.elements.btnClick();
    }

    doubleClickMessageMtd(){
        return this.elements.doubleClickMessage();
    }

    rightClickMessageMtd(){
        return this.elements.rightClickMessage();
    }

    dynamicClickMessageMtd(){
        return this.elements.dynamicClickMessage();
    }
}

export default ButtonsPO;