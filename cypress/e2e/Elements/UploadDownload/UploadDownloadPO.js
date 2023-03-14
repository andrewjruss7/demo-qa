class UDPO{

    elements = {
        btnUD : () => cy.get('#item-7'),
        textH5 : () => cy.get('h5').contains('Elements'),
        btnDownload : () => cy.get('#downloadButton'),
        btnUpload : () => cy.get('#uploadFile')
    }

    btnUDMtd(){
        return this.elements.btnUD();
    }

    textH5Mtd(){
        return this.elements.textH5();
    }

    btnDownloadMtd(){
        return this.elements.btnDownload();
    }

    btnUploadMtd(){
        return this.elements.btnUpload();
    }

}

export default UDPO;