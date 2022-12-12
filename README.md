# CypressApiTest

This project aims to show the use of the cypress tool, as a REST-API test automation tool where you can easily run the tests corresponding to the system with the various use cases required.

## Installation

- Install auth-api-tutorial-cypress with npm (you can install nvm and configure npm version 8.15.0).

### Optional installation

- You can optionally install lockgit from: https://github.com/jswidler/lockgit

## Environment Variables

To run this project, you will need to add the .env file to the project or open it with:

```bash
    lockgit set-key LMFTBSZHQJMZUNS4JELRZZ5AAVPJC5TSDD7IBNKTZZVHJVMK2YJA
```

```bash
    lockgit open
```

## Run Locally

Clone the project

Go to the project directory

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Running Tests

To run tests, run the following command

```bash
  npx cypress run
```

## Appendix

With Cypress we can easily automate many tests whether they are E2E or Rest-API.

## Tech Stack

**Security:** Dotenv, lockgit

**Server:** Node, Express, nodemon

**Database:** Mongo

**Automation Test:** Cypress, postman