const LoginPage = require('../pages/LoginPage');
const FacilitySelectionPage = require('../pages/FacilitySelectionPage');
const PatientSearchPage = require('../pages/PatientSearchPage');
const ServicePointPage = require('../pages/ServicePointPage');
const VitalPage = require('../pages/VitalPage');

/**
 * Test suite for saving patient vital information on https://staging-scweb.arcapps.org/
 */
describe('Save patient vital information on https://staging-scweb.arcapps.org/', () => {
  let dataSet = [];

  before(() => {
    cy.viewport(1920, 1080);

    // Use Cypress fixture to read CSV data
    cy.fixture('Sample Dataset.csv').then((csvData) => {
      const rows = csvData.trim().split('\n'); // Trim and split by newline
      const headers = rows[0].trim().split(',').map(header => header.trim()); // Clean headers

      dataSet = rows.slice(1).map(row => {
        const values = row.trim().split(',').map(value => {
          value = value.trim();
          return value === "NULL" ? null : value;
        }); // Clean values and replace "NULL" with null

        return headers.reduce((obj, header, index) => {
          obj[header] = values[index];
          return obj;
        }, {});
      });

      // Keep only the first 5 rows
      dataSet = dataSet.slice(0, 5);
    });
  });

  it('should log in and perform actions for each row in the dataset', () => {
    const loginPage = new LoginPage();
    loginPage.gotoLoginPage();
    loginPage.doLogin('tester', 'tester2023!');

    const facilitySelectionPage = new FacilitySelectionPage();
    facilitySelectionPage.setFacility('Lusaka', 'Lusaka', 'Dr Watson Dental Clinic');

    Cypress._.each(dataSet, (vitalData, index) => {

      cy.log(`Running test for dataset row ${index + 1}:`);
      cy.log(vitalData);
      
      // Perform the actions for each row of data
      const patientSearchPage = new PatientSearchPage();
      patientSearchPage.gotoPatientSearchPage();
      patientSearchPage.searchPatientByNrc('111111/11/1');
      patientSearchPage.attendToPatient();

      // const servicePointPage = new ServicePointPage();
      // servicePointPage.clickVital();

      // const vitalPage = new VitalPage();
      // vitalPage.clickAddVital();
      
      // vitalPage.saveVital(
      //   vitalData.weight,
      //   vitalData.height,
      //   vitalData.systolic,
      //   vitalData.diastolic,
      //   vitalData.temperature,
      //   vitalData.pulseRate,
      //   vitalData.respiratoryRate,
      //   vitalData.oxygenSaturation,
      //   vitalData.abdominalCircumference,
      //   vitalData.comment
      // );
    });
  });
  // it('should log in, select facility, search for patient, navigate to vitals, and save vitals', () => {
    // // Login
    // const loginPage = new LoginPage();
    // loginPage.gotoLoginPage();
    // loginPage.doLogin('tester', 'tester2023!');

    // // Select Facility
    // const facilitySelectionPage = new FacilitySelectionPage();
    // facilitySelectionPage.setFacility('Lusaka', 'Lusaka', 'Dr Watson Dental Clinic');

    // // Search for Patient by NRC and Attend to Patient
    // const patientSearchPage = new PatientSearchPage();
    // patientSearchPage.searchPatientByNrc('111111111');
    // patientSearchPage.attendToPatient();

    // // Navigate to Vitals Page
    // const servicePointPage = new ServicePointPage();
    // servicePointPage.clickVital();

    // // Add and Save Patient Vitals
    // const vitalPage = new VitalPage();
    // vitalPage.clickAddVital();
    // vitalPage.saveVital(68, 168, 132, 67, 62, 19, null, null, null);
  // });
});
