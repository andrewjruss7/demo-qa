class DynamicProp{

    elements = {
        buttonEnable : () => cy.get('#enableAfter'),
        buttonColor : () => cy.get('#colorChange'),
        buttonvisible : () => cy.get('#visibleAfter'),
        buttonDynamic: () => cy.get("#item-8"),
    }

    verifybuttonEnable(){
        return this.elements.buttonEnable();
    }

    verifybuttoncolor(){
        return this.elements.buttonColor();
    }

    verifybuttonvisible(){
        return this.elements.buttonvisible();
    }
    clickbuttonDynamic(){
        return this.elements.buttonDynamic();
    }
}
export default DynamicProp;