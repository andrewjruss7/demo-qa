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
        webTables.txtFirstNameMtd().type(table.name)
        webTables.txtLastNameMtd().type(table.lastName)
        webTables.txtUserEmailMtd().type(table.email)
        webTables.txtAgeMtd().type(table.age)
        webTables.txtSalaryMtd().type(table.salary)
        webTables.txtDepartmentMtd().type(table.department)
        webTables.btnSubmitMtd().click();

        for(let item in table){
            webTables.assertRowMtd(table[item])
        }

        //------------------------------------Edit Button-------------------------------------//
        let array = ['Maria A.', 'Perez H', 'marialeph@gmail.com', 27,1300000, 'TI']
        
        webTables.btnEditMtd().click();
        webTables.txtFirstNameMtd().clear().type(array[0])
        webTables.txtLastNameMtd().clear().type(array[1])
        webTables.txtUserEmailMtd().clear().type(array[2])
        webTables.txtAgeMtd().clear().type(array[3])
        webTables.txtSalaryMtd().clear().type(array[4])
        webTables.txtDepartmentMtd().clear().type(array[5])
        webTables.btnSubmitMtd().click();

        for(let item of array){
            webTables.assertRowMtd(item)
        }

        //----------------------------------Delete button-----------------------------------//
        webTables.btnDeleteMtd().click();

        for(let item of array){
            webTables.assertRowMtd("")
        }

    })
})