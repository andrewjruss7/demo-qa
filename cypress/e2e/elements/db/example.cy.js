const sql = 'SELECT * FROM employees';

describe('Testeando DB', () => 

  it('test1', () => { 
    cy.query(sql).then(response => {
    expect(response.length).to.be.greaterThan(0);
    });
  })
)