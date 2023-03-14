import WebTablesPO from "./WebTablesPO";

const webTables = new WebTablesPO();
let table;

describe("WebTables trial",  () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.url().should('include', Cypress.env('baseUrl'));
        cy.fixture('WebTables.json').then((data) => {
            table = data
        })
    })

    it('"Add, edit, delete" Buttons test', () => {
        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false
        })
        //------------------------------------Add button-------------------------------------//
        webTables.textH5Mtd().click();
        webTables.btnWebTableMtd().click();

        webTables.btnAddRecordMtd().click();
        webTables.txtFirstNameMtd().type(table.name).should('have.value',table.name)
        webTables.txtLastNameMtd().type(table.lastName).should('have.value',table.lastName)
        webTables.txtUserEmailMtd().type(table.email).should('have.value',table.email)
        webTables.txtAgeMtd().type(table.age).should('have.value',table.age)
        webTables.txtSalaryMtd().type(table.salary).should('have.value',table.salary)
        webTables.txtDepartmentMtd().type(table.department).should('have.value',table.department)
        webTables.btnSubmitMtd().click();

        for(let item in table){
            webTables.RowMtd().eq(3).contains(table[item]);
        }

        //------------------------------------Edit Button-------------------------------------//
        let array = ['Maria A.', 'Perez H', 'marialeph@gmail.com', 27,1300000, 'TI']
        
        webTables.btnEditMtd().click();
        webTables.txtFirstNameMtd().clear().type(array[0]).should('have.value',array[0])
        webTables.txtLastNameMtd().clear().type(array[1]).should('have.value',array[1])
        webTables.txtUserEmailMtd().clear().type(array[2]).should('have.value',array[2])
        webTables.txtAgeMtd().clear().type(array[3]).should('have.value',array[3])
        webTables.txtSalaryMtd().clear().type(array[4]).should('have.value',array[4])
        webTables.txtDepartmentMtd().clear().type(array[5]).should('have.value',array[5])
        webTables.btnSubmitMtd().click();

        for(let item of array){
            webTables.RowMtd().eq(3).contains(item);
        }

        //----------------------------------Delete button-----------------------------------//
        webTables.btnDeleteMtd().click();

        for(let item of array){
            webTables.RowMtd().eq(3).should('not.have.value');
        }

    })
})