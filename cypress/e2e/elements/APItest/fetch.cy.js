//ef712ae813a96b085763bf0ea33206f962c0e2abbfd7c9ca887c84d38508a6bc
//https://gorest.co.in/public/v2/users

const token = "ef712ae813a96b085763bf0ea33206f962c0e2abbfd7c9ca887c84d38508a6bc"
const endPointUser = "https://gorest.co.in/public/v2/users"
const miConstante = `juan${Math.floor(Math.random() * 1000) + 1}@gmail.com`;


describe ('API TEST', () => {
    it('Post method request', () =>{
        fetch(endPointUser, {
            method : 'POST',
            headers : {
                "Authorization" : 'Bearer ' + token,
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                "name": "Maria Alejandra",
                "email": miConstante,
                "gender": "female",
                "status": "active"
            })        
        }).then(response => response.json()
        ).then(data => {
            expect(data.name).to.eq('Maria Alejandra')
            expect(data.email).to.eq(miConstante)
            expect(data.gender).to.eq('female')
            expect(data.status).to.eq('active')
        })
    })
})