class UDPO{

    elements = {
        btnUD : () => cy.get('#item-7'),
        textH5 : () => cy.get('h5').contains('Elements'),
        btnDownload : () => cy.get('#downloadButton'),
        btnUpload : () => cy.get('#uploadFile'),
        txtFilePath : () => cy.get('#uploadedFilePath')
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

    txtFilePathtMtd(){
        return this.elements.txtFilePath();
    }

    Asserts = {
        assertFilePath : () => this.txtFilePathtMtd()
    }

    assertFilePathMtd(path){
        return this.Asserts.assertFilePath().should('contain', path)
    }
}

export default UDPO;