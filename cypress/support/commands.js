Cypress.Commands.add("DemoQA", ()=>{
    cy.visit(Cypress.env("baseUrl"))
    cy.url().should('include', Cypress.env("baseUrl"))
    cy.get('h5').contains('Elements').click({force:true})
})
require('cypress-downloadfile/lib/downloadFileCommand');
require('cy-verify-downloads').addCustomCommand();
/*const mysql = require('mysql');

Cypress.Commands.add('queryDatabase', (query, params = []) => {
  const connection = mysql.createConnection({
    host: Cypress.env('DB_HOST'),
    user: Cypress.env('DB_USER'),
    password: Cypress.env('DB_PASSWORD'),
    database: Cypress.env('DB_DATABASE')
  });

  connection.connect();

  return new Promise((resolve, reject) => {
    connection.query(query, params, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
      connection.end();
    });
  });
});*/



