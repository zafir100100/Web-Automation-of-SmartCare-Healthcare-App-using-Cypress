const LoginPage = require('../pages/LoginPage');

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

    this.IS_ATTENDABLE = false;
  }

  /**
   * Navigates to the patient search page.
   */
  gotoPatientSearchPage() {
    const loginPage = new LoginPage();
    cy.visit(`${loginPage.BASE_URL}/client-search`);
  }

  /**
   * Searches for a patient by their NRC (National Registration Card) number.
   * The NRC is sanitized to include only digits before performing the search.
   *
   * @param {string} NRC - The NRC number of the patient to search for.
   */
  searchPatientByNrc(NRC) {
    NRC = NRC.toString().trim()
    // // Sanitize the NRC to keep only digits
    // NRC = NRC.replace(/\D/g, '');

    cy.xpath(this.NRC_BUTTON_XPATH)
      .should('be.visible')
      .click();
    cy.xpath(this.NRC_INPUT_XPATH)
      .should('be.visible')
      .click()
      .type(NRC);
    cy.xpath(this.SEARCH_BUTTON_XPATH)
      .should('be.visible')
      .click();
  }

  /**
   * Checks the visibility of the attend to patient button and sets the IS_ATTENDABLE flag.
   * This method uses Cypress commands within a try-catch block to handle any potential errors gracefully.
   */
  checkAttendButtonVisibility() {
    this.IS_ATTENDABLE = false;
    try {
      cy.get('body').then(($body) => {
        if ($body.find('button:contains("Attend")').length > 0) {
          this.IS_ATTENDABLE = true;
        } else {
          //do something
          this.IS_ATTENDABLE = false;
        }
      });
    } catch (error) {
      // // Log the error and set IS_ATTENDABLE to false as a fallback
      // console.error('Error checking button visibility:', error);
      this.IS_ATTENDABLE = false;
    }
    finally {
      return this.IS_ATTENDABLE;
    }
  }

  /**
   * Attends to the patient found in the search results.
   */
  attendToPatient() {
    cy.xpath(this.ATTEND_TO_PATIENT_BUTTON_XPATH)
      .should('be.visible')
      .click();
    cy.xpath(this.ATTEND_TO_PATIENT_BUTTON_XPATH)
      .should('not.be.visible')
  }
}

export default PatientSearchPage;
