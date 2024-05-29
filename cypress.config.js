const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  // chromeWebSecurity: false, // for avoiding chrome web security
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // watchForFileChanges: false, // for avoiding watching for file changes
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        writeVitalsJson(data) {
          const filePath = path.join(__dirname, 'cypress/fixtures/vitals.json');
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
          return null;
        }
      });
      return config;
    },
  },
});
