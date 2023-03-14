/*describe('Verificar imagen rota', () => {
    it('Debe verificar que la imagen no esté rota', () => {
      cy.visit('https://www.example.com') // Navegar a la página que contiene la imagen
      cy.get('img').then(($img) => { // Obtener el elemento de imagen
        const imageUrl = $img.prop('src') // Obtener la URL de la imagen
        cy.request(imageUrl) // Hacer una solicitud HTTP a la URL de la imagen
          .its('status')
          .should('equal', 200) // Verificar que la respuesta HTTP tenga un código de estado 200
          .and('include', 'image') //
  */