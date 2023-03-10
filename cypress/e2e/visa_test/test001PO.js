class visa

{


    clickVisaBtn = '#visa-tab'

    txtInputFromCountry = "#select2-from_country-container"
    txtSelectFromCountry = "input[role='searchbox']"

    txtInputToCountry = '#select2-to_country-container'
    txtSelectToCountry = "input[role='searchbox']"

    clickSelecDate0 = '#date'
    clickDateSetToday= 'tbody tr:nth-child(2) td:nth-child(4)'

    clickSubmitBtn0 = '#submit'

    txtFirstName = 'input[placeholder="First Name"]'
    txtLastName = 'input[placeholder="Last Name"]'
    txtEmail = 'input[placeholder="Email"]'
    txtPhone = 'input[placeholder="Phone"]'
    clickSelecDate1 = 'input[placeholder="Date"]'
    txtNotes= "textarea[placeholder='Notes']"

    
    
    visaButton()
    {

        cy.get(this.clickVisaBtn).click({force:true})

    }

    selectFromCountry(fromcountry)
    {

        cy.get(this.txtInputFromCountry).click({force:true})
        cy.get(this.txtSelectFromCountry).click({force:true}).type(fromcountry, {force:true}).type('{enter}')

        
    }

    selecToCountry(tocountry)
    {

        cy.get(this.txtInputToCountry).click({force:true})
        cy.get(this.txtSelectToCountry).click({force:true}).type(tocountry, {force:true}).type('{enter}')

    }

    selectDate0()
    {

        cy.get(this.clickSelecDate0).click({force:true})
        cy.get(this.clickDateSetToday).click({force:true})

    }

    submitBtn0()
    {

        cy.get(this.clickSubmitBtn0).click({force:true})

    }

    firstNameInput(firstname)
    {

        cy.get(this.txtFirstName).type(firstname, {force:true})

    }

    lastNameInput(lastname)
    {

        cy.get(this.txtLastName).type(lastname, {force:true})

    }

    emailInput(email)
    {

        cy.get(this.txtEmail).type(email, {force:true})

    }

    phoneInput(phone)
    {

        cy.get(this.txtPhone).type(phone, {force:true})

    }

    selectDate1()
    {

        cy.get(this.clickSelecDate1).click({force:true})
        cy.get(this.clickDateSetToday)

    }

    notesInput(notes)
    {

        cy.get(this.txtNotes).type(notes, {force:true})

    }

    submitBtn1()
    {

        cy.get(this.clickSubmitBtn0).click({force:true})

    }

}


export default visa;