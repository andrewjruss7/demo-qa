class BrokenPO{

    elements = {
        btnBroken : () => cy.get('#item-6'),
        textH5 : () => cy.get('h5').contains('Elements'),
        validLink : () => cy.get('a').filter((index, element) => {
            return Cypress.$(element).text() === 'Click Here for Valid Link';
        }),
        BrokenLink : () => cy.get('a').filter((index, element) => {
            return Cypress.$(element).text() === 'Click Here for Broken Link';
        }),
        imgValid : () => cy.get('img[src="/images/Toolsqa.jpg"]'),
        imgBroken : () => cy.get('img[src="/images/Toolsqa_1.jpg"]')
    }

    btnBrokenMtd(){
        return this.elements.btnBroken();
    }

    textH5Mtd(){
        return this.elements.textH5();
    }

    validLinkMtd(){
        return this.elements.validLink();
    }

    BrokenLinkMtd(){
        return this.elements.BrokenLink();
    }

    imgValidMtd(){
        return this.elements.imgValid();
    }

    imgBrokenMtd(){
        return this.elements.imgBroken();
    }

}

export default BrokenPO;