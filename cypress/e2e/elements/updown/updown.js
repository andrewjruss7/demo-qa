class Updown { // Creando una Clase, le asigno por nombre LoginPO. PO dicese de Page Object. 
    elements = { // Acá estoy creando un objeto, donde estoy almacenando los elementos/etiquetas  para dar click. 
        uploadButton: () => cy.get("#uploadFile"),
        verifyUpload: () => cy.get('#uploadedFilePath'),
        downloadButton: () => cy.get("#downloadButton"),
    }
    clickUploadButton() { // Acá estoy creando un método/función para acceder a los elementos y que desde el orquestador (el archivo de pruebas, el cy.js) yo pueda ingresar.
        return this.elements.uploadButton () // return = regresame este elemento (this.elements) y el método creado por cada elemento/etiqueta. 
    }
    clickdownloadButton() {
        return this.elements.downloadButton()
    }
    getVerifyUpload() {
        return this.elements.verifyUpload()
    }
}
export default Updown// Exportando la clase. Esto toca hacerlo porque sino no sicve el código este. 