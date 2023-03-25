
describe('Ejemplo de prueba con base de datos', () => {
    it('Obtiene los usuarios de la base de datos', () => {
      cy.queryDatabase('SELECT country_id * FROM countries').then((results) => {
        expect(results).to.have.length(2);
      });
    });
  });