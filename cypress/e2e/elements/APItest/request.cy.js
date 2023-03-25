//ef712ae813a96b085763bf0ea33206f962c0e2abbfd7c9ca887c84d38508a6bc
//https://gorest.co.in/public/v2/users

const token = "ef712ae813a96b085763bf0ea33206f962c0e2abbfd7c9ca887c84d38508a6bc"
const endPointUser = "https://gorest.co.in/public/v2/users"
const miConstante = `juan${Math.floor(Math.random() * 1000) + 1}@gmail.com`;

describe ('API TEST', () => {
    it('Post method request', () =>{
        
        cy.request({
            method: 'POST',
            url: endPointUser,
            headers: { 
                "Authorization" : 'Bearer ' + token
            },
            body: {
                "name": "Maria Alejandra",
                "email": miConstante,
                "gender": "female",
                "status": "active"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq('Maria Alejandra')
            expect(response.body.email).to.eq()
            expect(response.body.gender).to.eq('female')
            expect(response.body.status).to.eq('active')
        })
    })
})