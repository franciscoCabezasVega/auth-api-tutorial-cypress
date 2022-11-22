import { bodyRegisterUser, registerEndpoint } from "../constants"

const Guid = require('guid');

describe('/user/register', () => {

    it('creates user with valid body', () => {
        let dynamicEmail = Guid.raw() + '@bar.com';
        let body = bodyRegisterUser('TestName', dynamicEmail, 'Test0987');
        //cypress assertions
        cy.request('POST', registerEndpoint, body)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq('TestName');
                expect(response.body.email).to.eq(dynamicEmail);
                expect(response.body.password).to.not.eq('Test0987');
            });
    });

    it('does noy allow user creation with bad user body', () => {
        let badTestUser = bodyRegisterUser('1', 'foo', '1');
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: badTestUser
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('does noy allow user creation with invalid name', () => {
        let badNameUser = bodyRegisterUser('1', 'invalidEmail', 'validPassword');
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: badNameUser
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.eq('"name" length must be at least 2 characters long');
        });
    });

    it('does noy allow user creation without name', () => {
        let withoutNameUser = bodyRegisterUser('', 'invalidEmail', 'validPassword');
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: withoutNameUser
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.eq('"name" is not allowed to be empty');
        });
    });

    it('does noy allow user creation with invalid email', () => {
        let badEmailUser = bodyRegisterUser('ValidName', 'invalidEmail', 'validPassword');
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: badEmailUser
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.eq('"email" must be a valid email');
        });
    });

    it('does noy allow user creation without email', () => {
        let withoutNameUser = bodyRegisterUser('ValidName', '', 'validPassword');
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: withoutNameUser
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.eq('"email" is not allowed to be empty');
        });
    });

    it('can not duplicate user', () => {
        let goodTestUser = {
            name: 'ValidName',
            email: 'staticEmail@email.com',
            password: 'validPassword'
        }
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: goodTestUser
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.eq('Email already registered');
        });
    });

    it('returns 400 when with no body', () => {
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

});