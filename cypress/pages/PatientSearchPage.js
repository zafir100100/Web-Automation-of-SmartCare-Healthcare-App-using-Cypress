/**
 * Class representing the patient search page.
 */
class PatientSearchPage {
    /**
     * Creates an instance of PatientSearchPage.
     */
    constructor() {
      /**
       * @property {string} NRC_BUTTON_XPATH - XPath for the NRC button.
       */
      this.NRC_BUTTON_XPATH = "//button[contains(text(),'NRC')]";
  
      /**
       * @property {string} NRC_INPUT_XPATH - XPath for the NRC input field.
       */
      this.NRC_INPUT_XPATH = "//input[@name='nrc']";
  
      /**
       * @property {string} SEARCH_BUTTON_XPATH - XPath for the search button.
       */
      this.SEARCH_BUTTON_XPATH = "//button[text()='Search']";
  
      /**
       * @property {string} ATTEND_TO_PATIENT_BUTTON_XPATH - XPath for the attend to patient button.
       */
      this.ATTEND_TO_PATIENT_BUTTON_XPATH = "//button[contains(text(),'Attend')]";
    }
  
    /**
     * Searches for a patient by NRC.
     * @param {string} nrc - The NRC of the patient to search for.
     */
    searchPatientByNrc(nrc) {
      cy.xpath(this.NRC_BUTTON_XPATH)
        .should('be.visible')
        .click();
      cy.xpath(this.NRC_INPUT_XPATH)
        .should('be.visible')
        .click()
        .type(nrc);
      cy.xpath(this.SEARCH_BUTTON_XPATH)
        .should('be.visible')
        .click();
    }
  
    /**
     * Attends to the patient found in the search results.
     */
    attendToPatient() {
      cy.xpath(this.ATTEND_TO_PATIENT_BUTTON_XPATH)
        .should('be.visible')
        .click();
    }
  }
  
  export default PatientSearchPage;
  