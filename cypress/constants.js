export const bodyRegisterUser = (name, email, password) => {
    let body = {
        name: name,
        email: email,
        password: password
    }
    return body;
};

export const registerEndpoint = Cypress.env('registerEndpoint');