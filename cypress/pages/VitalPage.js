/**
 * Class representing the vital page.
 */
class VitalPage {
    /**
     * Creates an instance of VitalPage.
     */
    constructor() {
      /**
       * @property {string} ADD_VITAL_BUTTON_XPATH - XPath for the add vital button.
       */
      this.ADD_VITAL_BUTTON_XPATH = "//button[text()='Add Vital']";
  
      /**
       * @property {string} WEIGHT_XPATH - XPath for the weight input field.
       */
      this.WEIGHT_XPATH = "//input[@type='text'][contains(@placeholder,'Weight')]";
  
      /**
       * @property {string} HEIGHT_XPATH - XPath for the height input field.
       */
      this.HEIGHT_XPATH = "//input[@type='text'][contains(@placeholder,'Height')]";
  
      /**
       * @property {string} SYSTOLIC_XPATH - XPath for the systolic input field.
       */
      this.SYSTOLIC_XPATH = "//input[@type='text'][contains(@placeholder,'Systolic')]";
  
      /**
       * @property {string} DIASTOLIC_XPATH - XPath for the diastolic input field.
       */
      this.DIASTOLIC_XPATH = "//input[@type='text'][contains(@placeholder,'Diastolic')]";
  
      /**
       * @property {string} PULSE_RATE_XPATH - XPath for the pulse rate input field.
       */
      this.PULSE_RATE_XPATH = "//input[@name='pulseRate']";
  
      /**
       * @property {string} RESPIRATORY_RATE_XPATH - XPath for the respiratory rate input field.
       */
      this.RESPIRATORY_RATE_XPATH = "//input[@name='respiratoryRate']";
  
      /**
       * @property {string} OXYGEN_SATURATION_XPATH - XPath for the oxygen saturation input field.
       */
      this.OXYGEN_SATURATION_XPATH = "//input[@name='oxygenSaturation']";
  
      /**
       * @property {string} ABDOMINAL_CIRCUMFERENCE_XPATH - XPath for the abdominal circumference input field.
       */
      this.ABDOMINAL_CIRCUMFERENCE_XPATH = "//input[@name='abdominalCircumference']";
  
      /**
       * @property {string} COMMENT_XPATH - XPath for the comment textarea.
       */
      this.COMMENT_XPATH = "//textarea[@name='comment']";
  
      /**
       * @property {string} SAVE_BUTTON_XPATH - XPath for the save button.
       */
      this.SAVE_BUTTON_XPATH = "//button[@type='submit']/span[contains(text(),'Save')]";
    }
  
    /**
     * Clicks on the add vital button to navigate to the add vitals page.
     */
    clickAddVital() {
      cy.xpath(this.ADD_VITAL_BUTTON_XPATH)
        .should('be.visible')
        .click();
    }
  
    /**
     * Fills out the vital form and saves the information.
     * @param {string} weight - The weight of the patient.
     * @param {string} height - The height of the patient.
     * @param {string} systolic - The systolic blood pressure.
     * @param {string} diastolic - The diastolic blood pressure.
     * @param {string} pulseRate - The pulse rate.
     * @param {string} respiratoryRate - The respiratory rate.
     * @param {string} oxygenSaturation - The oxygen saturation.
     * @param {string} abdominalCircumference - The abdominal circumference.
     * @param {string} comment - Additional comments.
     */
    saveVital(weight, height, systolic, diastolic, pulseRate, respiratoryRate, oxygenSaturation, abdominalCircumference, comment) {
      cy.xpath(this.WEIGHT_XPATH)
        .should('be.visible')
        .clear()
        .type(weight);
      cy.xpath(this.HEIGHT_XPATH)
        .should('be.visible')
        .clear()
        .type(height);
      cy.xpath(this.SYSTOLIC_XPATH)
        .should('be.visible')
        .clear()
        .type(systolic);
      cy.xpath(this.DIASTOLIC_XPATH)
        .should('be.visible')
        .clear()
        .type(diastolic);
      cy.xpath(this.PULSE_RATE_XPATH)
        .should('be.visible')
        .clear()
        .type(pulseRate);
      cy.xpath(this.RESPIRATORY_RATE_XPATH)
        .should('be.visible')
        .clear()
        .type(respiratoryRate);
      cy.xpath(this.OXYGEN_SATURATION_XPATH)
        .should('be.visible')
        .clear()
        .type(oxygenSaturation);
      cy.xpath(this.ABDOMINAL_CIRCUMFERENCE_XPATH)
        .should('be.visible')
        .clear()
        .type(abdominalCircumference);
      cy.xpath(this.COMMENT_XPATH)
        .should('be.visible')
        .clear()
        .type(comment);
      cy.xpath(this.SAVE_BUTTON_XPATH)
        .should('be.visible')
        .click();
    }
  }
  
  export default VitalPage;
  