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

  /**
   * Test case for user login functionality.
   */
  describe('User Login', () => {
    it('should log in successfully', () => {
      const loginPage = new LoginPage();
      loginPage.gotoLoginPage();
      loginPage.doLogin('tester', 'tester2023!');
    });
  });

  /**
   * Test case for selecting the facility.
   */
  describe('Facility Selection', () => {
    it('should select the facility', () => {
      const facilitySelectionPage = new FacilitySelectionPage();
      facilitySelectionPage.setFacility('Lusaka', 'Lusaka', 'Dr Watson Dental Clinic');
    });
  });

  /**
   * Test case for searching a patient by NRC and attending to the patient.
   */
  describe('Patient Search', () => {
    it('should search for a patient by NRC and attend to the patient', () => {
      const patientSearchPage = new PatientSearchPage();
      patientSearchPage.searchPatientByNrc('111111111');
      patientSearchPage.attendToPatient();
    });
  });

  /**
   * Test case for navigating to the vitals page.
   */
  describe('Service Point Navigation', () => {
    it('should navigate to the vitals page', () => {
      const servicePointPage = new ServicePointPage();
      servicePointPage.clickVital();
    });
  });

  /**
   * Test case for adding and saving patient vitals.
   */
  describe('Add and Save Vitals', () => {
    it('should add and save patient vitals', () => {
      const vitalPage = new VitalPage();
      vitalPage.clickAddVital();
      vitalPage.saveVital(68, 168, 132, 67, 62, 19, null, null, null);
    });
  });
});
