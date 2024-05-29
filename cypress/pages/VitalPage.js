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
    cy.xpath(this.ADD_VITAL_BUTTON_XPATH)
      .should('not.be.visible');
  }

  /**
   * Efficiently saves the vital signs of a patient to the system using Cypress commands.
   * Vital signs are added to the map only if they are not null, reducing unnecessary operations.
   * @param {string | null} Weight - Patient's weight in kilograms.
   * @param {string | null} Height - Patient's height in centimeters.
   * @param {string | null} Systolic - Systolic blood pressure in mmHg.
   * @param {string | null} Diastolic - Diastolic blood pressure in mmHg.
   * @param {string | null} Temperature - Body temperature in degrees Celsius.
   * @param {string | null} PulseRate - Heart rate in beats per minute.
   * @param {string | null} RespiratoryRate - Respiratory rate in breaths per minute.
   * @param {string | null} OxygenSaturation - Oxygen saturation in percentage.
   * @param {string | null} AbdominalCircumference - Abdominal circumference in centimeters.
   * @param {string | null} Comment - Optional comment regarding the patient's condition.
   */
  saveVital(Weight, Height, Systolic, Diastolic, Temperature, PulseRate, RespiratoryRate, OxygenSaturation, AbdominalCircumference, Comment) {
    const vitalSigns = new Map();

    // Add only non-null values to the map.
    if (Weight !== null) vitalSigns.set('Weight', { value: Weight, xpath: this.WEIGHT_XPATH });
    if (Height !== null) vitalSigns.set('Height', { value: Height, xpath: this.HEIGHT_XPATH });
    if (Systolic !== null) vitalSigns.set('Systolic', { value: Systolic, xpath: this.SYSTOLIC_XPATH });
    if (Diastolic !== null) vitalSigns.set('Diastolic', { value: Diastolic, xpath: this.DIASTOLIC_XPATH });
    if (Temperature !== null) vitalSigns.set('Temperature', { value: Temperature, xpath: this.TEMPERATURE_XPATH });
    if (PulseRate !== null) vitalSigns.set('PulseRate', { value: PulseRate, xpath: this.PULSE_RATE_XPATH });
    if (RespiratoryRate !== null) vitalSigns.set('RespiratoryRate', { value: RespiratoryRate, xpath: this.RESPIRATORY_RATE_XPATH });
    if (OxygenSaturation !== null) vitalSigns.set('OxygenSaturation', { value: OxygenSaturation, xpath: this.OXYGEN_SATURATION_XPATH });
    if (AbdominalCircumference !== null) vitalSigns.set('AbdominalCircumference', { value: AbdominalCircumference, xpath: this.ABDOMINAL_CIRCUMFERENCE_XPATH });
    if (Comment !== null) vitalSigns.set('Comment', { value: Comment, xpath: this.COMMENT_XPATH });

    // Iterate through each entry in the map and apply the Cypress commands.
    vitalSigns.forEach((data, key) => {
      cy.xpath(data.xpath)
        .should('be.visible')
        .clear()
        .type(data.value);
    });

    // Click the save button after all fields have been processed.
    cy.xpath(this.SAVE_BUTTON_XPATH)
      .should('be.visible')
      .click();
  }
}

export default VitalPage;
