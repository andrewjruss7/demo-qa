class WebTablesPO{

    elements = {
        btnWebTable : () => cy.get('#item-3'),
        textH5 : () => cy.get('h5').contains('Elements'),
        btnAddRecord : () => cy.get('#addNewRecordButton'),
        spanSearch : () => cy.get('#basic-addon2'),
        txtSearchBox : () => cy.get('#searchBox'),
        ReactTable : () => cy.get('.ReactTable'),
        Row : () => cy.get('.rt-tr-group'),
        btnEdit : () => cy.get('#edit-record-4'),
        btnDelete : () => cy.get('#delete-record-4'),
        txtFirstName : () => cy.get('#firstName'),
        txtLastName : () => cy.get('#lastName'),
        txtUserEmail : () => cy.get('#userEmail'),
        txtAge : () => cy.get('#age'),
        txtSalary : () => cy.get('#salary'),
        txtDepartment : () => cy.get('#department'),
        btnSubmit : () => cy.get('#submit')

    }

    btnWebTableMtd(){
        return this.elements.btnWebTable();
    }

    textH5Mtd(){
        return this.elements.textH5();
    }

    btnAddRecordMtd(){
        return this.elements.btnAddRecord();
    }

    spanSearchMtd(){
        return this.elements.spanSearch();
    }

    txtSearchBoxMtd(){
        return this.elements.txtSearchBox();
    }

    ReactTableMtd(){
        return this.elements.ReactTable();
    }

    RowMtd(){
        return this.elements.Row();
    }

    btnEditMtd(){
        return this.elements.btnEdit();
    }

    btnDeleteMtd(){
        return this.elements.btnDelete();
    }

    txtFirstNameMtd(){
        return this.elements.txtFirstName();
    }

    txtLastNameMtd(){
        return this.elements.txtLastName();
    }

    txtUserEmailMtd(){
        return this.elements.txtUserEmail();
    }

    txtAgeMtd(){
        return this.elements.txtAge();
    }

    txtSalaryMtd(){
        return this.elements.txtSalary();
    }
    
    txtDepartmentMtd(){
        return this.elements.txtDepartment();
    }

    btnSubmitMtd(){
        return this.elements.btnSubmit();
    }
}

export default WebTablesPO;