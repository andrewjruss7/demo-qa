const db = require('../Prueba1/prueba'); // la ruta correcta a tu archivo db.js

describe('Prueba de conexión a MySQL', () => {
  it('Consulta SQL', async () => {
    const result = await db.query('SELECT country_id * FROM hr.countries');
    console.log(result);
    expect(result).to.be.an('array');
  });
});