class DynamicPropertiesPO{

    elements = {
        btnEnable : () => cy.get('#enableAfter'),
        textH5 : () => cy.get('h5').contains('Elements'),
        btncolorChange : () => cy.get('#colorChange'),
        btnvisibleAfter : () => cy.get('#visibleAfter'),
        btnDynamicP: () => cy.get('#item-8')
    }

    btnEnableMtd(){
        return this.elements.btnEnable();
    }

    textH5Mtd(){
        return this.elements.textH5();
    }

    btncolorChangeMtd(){
        return this.elements.btncolorChange();
    }

    btnvisibleAfterMtd(){
        return this.elements.btnvisibleAfter();
    }

    btnDynamicPMtd(){
        return this.elements.btnDynamicP();
    }
}

export default DynamicPropertiesPO;