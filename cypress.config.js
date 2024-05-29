const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const csv = require("csvtojson");


module.exports = defineConfig({
  // chromeWebSecurity: false, // for avoiding chrome web security
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // watchForFileChanges: false, // for avoiding watching for file changes
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        writeVitalsJson() {
          const csvFilePath = path.resolve(__dirname, 'cypress/fixtures/Sample Dataset.csv');
          const jsonFilePath = path.resolve(__dirname, 'cypress/fixtures/vitals.json');

          return new Promise((resolve, reject) => {
            csv()
              .fromFile(csvFilePath)
              .then((jsonObj) => {
                // Keep only the first 5 rows
                const dataSet = jsonObj.slice(0, 5);

                fs.writeFile(jsonFilePath, JSON.stringify(dataSet, null, 2), 'utf8', (err) => {
                  if (err) {
                    return reject(err);
                  }
                  resolve(null);
                });
              })
              .catch(err => reject(err));
          });
        }
      });
      return config;
    },
  },
});
