const LoginPage = require('../pages/LoginPage');
const FacilitySelectionPage = require('../pages/FacilitySelectionPage');
const PatientSearchPage = require('../pages/PatientSearchPage');
const ServicePointPage = require('../pages/ServicePointPage');
const VitalPage = require('../pages/VitalPage');
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
    // Login
    const loginPage = new LoginPage();
    loginPage.gotoLoginPage();
    loginPage.doLogin('tester', 'tester2023!');

    // Select Facility
    const facilitySelectionPage = new FacilitySelectionPage();
    facilitySelectionPage.setFacility('Lusaka', 'Lusaka', 'Dr Watson Dental Clinic');

    let dataSet = require('../fixtures/vitals.json');

    Cypress._.each(dataSet, (vitalData, index) => {
      // Search for Patient by NRC and Attend to Patient
      const patientSearchPage = new PatientSearchPage();
      patientSearchPage.gotoPatientSearchPage();
      // patientSearchPage.searchPatientByNrc(vitalData.NRC);
      patientSearchPage.searchPatientByNrc(vitalData.NRC);
      const IS_ATTENDABLE = patientSearchPage.checkAttendButtonVisibility();

      if(IS_ATTENDABLE === true){
        patientSearchPage.attendToPatient();

        // Navigate to Vitals Page
        const servicePointPage = new ServicePointPage();
        servicePointPage.clickVital();
  
        // Add and Save Patient Vitals
        const vitalPage = new VitalPage();
        vitalPage.clickAddVital();
        // vitalPage.saveVital(
        //   vitalStats.Weight,
        //   vitalStats.Height,
        //   vitalStats.Systolic,
        //   vitalStats.Diastolic,
        //   vitalStats.Temperature,
        //   vitalStats.PulseRate,
        //   vitalStats.RespiratoryRate,
        //   vitalStats.OxygenSaturation,
        //   vitalStats.AbdominalCircumference,
        //   vitalStats.Comment
        // );
      }
    });
    cy.screenshot('vitals');
  });
});
