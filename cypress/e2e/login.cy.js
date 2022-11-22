const Guid = require('guid');

describe('/user/login', () => {

    const loginEndpoint = 'http://localhost:3000/api/user/login';

    it('log in with valid user', () => {
        let staticTestUser = {
            email: 'staticEmail@email.com',
            password: 'validPassword'
        }
        cy.request({
            method: 'POST',
            url: loginEndpoint,
            body: staticTestUser
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    })

})