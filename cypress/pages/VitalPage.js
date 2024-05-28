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
     * @property {string} TEMPERATURE_XPATH - XPath for the temperature input field.
     */
    this.TEMPERATURE_XPATH = "//input[@name='temperature']";

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
   * @param {string|number} weight - The weight of the patient.
   * @param {string|number} height - The height of the patient.
   * @param {string|number} systolic - The systolic blood pressure.
   * @param {string|number} diastolic - The diastolic blood pressure.
   * @param {string|number} temperature - The body temperature of the patient.
   * @param {string|number} pulseRate - The pulse rate.
   * @param {string|number} respiratoryRate - The respiratory rate.
   * @param {string|number} oxygenSaturation - The oxygen saturation.
   * @param {string|number} abdominalCircumference - The abdominal circumference.
   * @param {string} comment - Additional comments.
   */
  saveVital(weight, height, systolic, diastolic, temperature, pulseRate, respiratoryRate, oxygenSaturation, abdominalCircumference, comment) {
    if (weight !== null && weight !== undefined) {
      cy.xpath(this.WEIGHT_XPATH)
        .should('be.visible')
        .clear()
        .type(weight.toString());
    }
    if (height !== null && height !== undefined) {
      cy.xpath(this.HEIGHT_XPATH)
        .should('be.visible')
        .clear()
        .type(height.toString());
    }
    if (systolic !== null && systolic !== undefined) {
      cy.xpath(this.SYSTOLIC_XPATH)
        .should('be.visible')
        .clear()
        .type(systolic.toString());
    }
    if (diastolic !== null && diastolic !== undefined) {
      cy.xpath(this.DIASTOLIC_XPATH)
        .should('be.visible')
        .clear()
        .type(diastolic.toString());
    }
    if (temperature !== null && temperature !== undefined) {
      cy.xpath(this.TEMPERATURE_XPATH)
        .should('be.visible')
        .clear()
        .type(temperature.toString());
    }
    if (pulseRate !== null && pulseRate !== undefined) {
      cy.xpath(this.PULSE_RATE_XPATH)
        .should('be.visible')
        .clear()
        .type(pulseRate.toString());
    }
    if (respiratoryRate !== null && respiratoryRate !== undefined) {
      cy.xpath(this.RESPIRATORY_RATE_XPATH)
        .should('be.visible')
        .clear()
        .type(respiratoryRate.toString());
    }
    if (oxygenSaturation !== null && oxygenSaturation !== undefined) {
      cy.xpath(this.OXYGEN_SATURATION_XPATH)
        .should('be.visible')
        .clear()
        .type(oxygenSaturation.toString());
    }
    if (abdominalCircumference !== null && abdominalCircumference !== undefined) {
      cy.xpath(this.ABDOMINAL_CIRCUMFERENCE_XPATH)
        .should('be.visible')
        .clear()
        .type(abdominalCircumference.toString());
    }
    if (comment !== null && comment !== undefined) {
      cy.xpath(this.COMMENT_XPATH)
        .should('be.visible')
        .clear()
        .type(comment.toString());
    }
    cy.xpath(this.SAVE_BUTTON_XPATH)
      .should('be.visible')
      .click();
  }
}

export default VitalPage;
