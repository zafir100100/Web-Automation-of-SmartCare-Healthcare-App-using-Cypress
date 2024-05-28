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

  it('should log in, select facility, search for patient, navigate to vitals, and save vitals', () => {
    // Login
    const loginPage = new LoginPage();
    loginPage.gotoLoginPage();
    loginPage.doLogin('tester', 'tester2023!');

    // Select Facility
    const facilitySelectionPage = new FacilitySelectionPage();
    facilitySelectionPage.setFacility('Lusaka', 'Lusaka', 'Dr Watson Dental Clinic');

    // Search for Patient by NRC and Attend to Patient
    const patientSearchPage = new PatientSearchPage();
    patientSearchPage.searchPatientByNrc('111111111');
    patientSearchPage.attendToPatient();

    // Navigate to Vitals Page
    const servicePointPage = new ServicePointPage();
    servicePointPage.clickVital();

    // Add and Save Patient Vitals
    const vitalPage = new VitalPage();
    vitalPage.clickAddVital();
    vitalPage.saveVital(68, 168, 132, 67, 62, 19, null, null, null);
  });
});
