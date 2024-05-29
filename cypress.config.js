const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const csv = require("csvtojson");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
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
                let dataSet = jsonObj.slice(0, 5);

                // Directly modify each object in the dataSet to convert "NULL" to null
                dataSet = dataSet.map(obj => {
                  return Object.fromEntries(
                    Object.entries(obj).map(([key, value]) => [key, value === "NULL" ? null : value])
                  );
                });

                // Write the JSON file
                fs.writeFile(jsonFilePath, JSON.stringify(dataSet, null, 2), 'utf8', (err) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve('JSON file has been written successfully.');
                  }
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
