const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // chromeWebSecurity: false, // for avoiding chrome web security
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // watchForFileChanges: false, // for avoiding watching for file changes
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-mochawesome-reporter/plugin')(on);


      // set priority of test cases if needed
      // config.specPattern = [
      //   'cypress/e2e/Login.cy.js',
      //   'cypress/e2e/AddToCart.cy.js'
      // ]

      // return config;
    },
  },
});
