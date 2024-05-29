const LoginPage = require('../pages/LoginPage');
const FacilitySelectionPage = require('../pages/FacilitySelectionPage');
const PatientSearchPage = require('../pages/PatientSearchPage');
// const ServicePointPage = require('../pages/ServicePointPage');
// const VitalPage = require('../pages/VitalPage');
/**
 * Test suite for saving patient vital information on https://staging-scweb.arcapps.org/
 */
describe('Save patient vital information on https://staging-scweb.arcapps.org/', () => {

  before(() => {
    cy.viewport(1920, 1080);
  });

  it('should load data in dataset', () => {
    // Trigger the task to read CSV and write JSON
    cy.task('writeVitalsJson');

  });
  

  it('should log in and perform actions for each row in the dataset', () => {
    const loginPage = new LoginPage();
    loginPage.gotoLoginPage();
    loginPage.doLogin('tester', 'tester2023!');

    const facilitySelectionPage = new FacilitySelectionPage();
    facilitySelectionPage.setFacility('Lusaka', 'Lusaka', 'Dr Watson Dental Clinic');

    let dataSet = require('../fixtures/vitals.json');

    Cypress._.each(dataSet, (vitalData, index) => {

      cy.log(`Running test for dataset row ${index + 1}:`);
      cy.log(vitalData);
      
      // Perform the actions for each row of data
      const patientSearchPage = new PatientSearchPage();
      patientSearchPage.gotoPatientSearchPage();
      patientSearchPage.searchPatientByNrc(dataSet[index].NRC);
      patientSearchPage.attendToPatient();
    });
  });
});
