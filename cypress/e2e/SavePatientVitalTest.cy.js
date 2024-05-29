const LoginPage = require('../pages/LoginPage');
const FacilitySelectionPage = require('../pages/FacilitySelectionPage');
const PatientSearchPage = require('../pages/PatientSearchPage');
// const ServicePointPage = require('../pages/ServicePointPage');
// const VitalPage = require('../pages/VitalPage');
let dataSet = [];
/**
 * Test suite for saving patient vital information on https://staging-scweb.arcapps.org/
 */
describe('Save patient vital information on https://staging-scweb.arcapps.org/', () => {

  before(() => {
    cy.viewport(1920, 1080);
  });

  it('should load data in dataset', () => {
    // Use Cypress fixture to read CSV data
    cy.fixture('Sample Dataset.csv').then((csvData) => {
      const requiredKeys = [
        'NRC', 'Weight', 'Height', 'BMI', 'Systolic', 'SystolicIfUnrecordable',
        'Diastolic', 'DiastolicIfUnrecordable', 'Temperature', 'PulseRate',
        'RespiratoryRate', 'OxygenSaturation', 'MUAC', 'MUACScore',
        'AbdominalCircumference', 'HeadCircumference', 'HCScore',
        'RandomBloodSugar', 'Comment', 'VitalsDate'
      ];
    
      const rows = csvData.trim().split('\n'); // Trim and split by newline
    
      dataSet = rows.slice(1).map(row => {
        const values = row.trim().split(',').map(value => {
          value = value.trim();
          return (value === "NULL" || value === "" || value === " " || isNaN(value) && !isNaN(parseFloat(value))) ? null : value;
        }); // Clean values and replace any invalid value with null
    
        const rowObj = requiredKeys.reduce((obj, header, index) => {
          obj[header] = values[index] !== undefined ? values[index] : null;
          return obj;
        }, {});
    
        return rowObj;
      });

      // Keep only the first 5 rows
      dataSet = dataSet.slice(0, 5);

      // Use Cypress task to write the data to vitals.json
      cy.task('writeVitalsJson', dataSet);
    });
  });

  // it('should log in and perform actions for each row in the dataset', () => {
  //   const loginPage = new LoginPage();
  //   loginPage.gotoLoginPage();
  //   loginPage.doLogin('tester', 'tester2023!');

  //   const facilitySelectionPage = new FacilitySelectionPage();
  //   facilitySelectionPage.setFacility('Lusaka', 'Lusaka', 'Dr Watson Dental Clinic');

  //   Cypress._.each(dataSet, (vitalData, index) => {

  //     cy.log(`Running test for dataset row ${index + 1}:`);
  //     cy.log(vitalData);
      
  //     // Perform the actions for each row of data
  //     const patientSearchPage = new PatientSearchPage();
  //     patientSearchPage.gotoPatientSearchPage();
  //     patientSearchPage.searchPatientByNrc(dataSet[index].NRC);
  //     patientSearchPage.attendToPatient();
  //   });
  // });
});
