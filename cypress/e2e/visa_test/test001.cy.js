import visa from "./test001PO";
import faker from 'faker';

describe('Test001', () => {



    it('Test001', () => {


        const ln = new visa();

        cy.visit("https://phptravels.net/visa");

        cy.wait(5000)
        
        
        ln.selectFromCountry('Colombia');
        ln.selecToCountry('United States');
        ln.selectDate0()


        ln.submitBtn0();
        ln.firstNameInput(faker.name.firstName());
        ln.lastNameInput(faker.name.lastName());
        ln.emailInput(faker.internet.email());
        ln.phoneInput(faker.phone.phoneNumber())
        ln.selectDate1();
        ln.notesInput('This is only a test')
        ln.submitBtn1()

        cy.get(".card-body.my-5.text-center").contains('Your visa form has been submitted')

        
    })




})