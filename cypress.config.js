const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false
  },
  env: {
    registerEndpoint: 'http://localhost:3000/api/user/register'
  }
});
