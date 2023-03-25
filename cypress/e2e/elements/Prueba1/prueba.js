const mysql = require('mysql2/promise');

const config = {
  host: 'localhost', // o la dirección IP de tu servidor MySQL local
  user: 'root', // el usuario de MySQL
  password: '123456', // la contraseña de MySQL
  database: 'hr', // el nombre de tu base de datos MySQL local
};

const pool = mysql.createPool(config);

module.exports = {
  query: async function (sql, values) {
    const connection = await pool.getConnection();
    try {
      const [rows, fields] = await connection.execute(sql, values);
      return rows;
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
  },
};