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
    // Trigger the task to read CSV and write JSON
    cy.task('writeVitalsJson').then(() => {
      // Now you can read the JSON file and verify its contents if needed
      cy.fixture('vitals.json').then((jsonData) => {
        // Perform assertions or further operations on jsonData
        // console.log(jsonData);
  
        // Example assertions (adjust based on your requirements)
        // expect(jsonData).to.have.length(5);
        jsonData.forEach(item => {
          expect(item).to.have.all.keys(
            'NRC', 'Weight', 'Height', 'BMI', 'Systolic', 'SystolicIfUnrecordable',
            'Diastolic', 'DiastolicIfUnrecordable', 'Temperature', 'PulseRate',
            'RespiratoryRate', 'OxygenSaturation', 'MUAC', 'MUACScore',
            'AbdominalCircumference', 'HeadCircumference', 'HCScore',
            'RandomBloodSugar', 'Comment', 'VitalsDate'
          );
        });
      });
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
