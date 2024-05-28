/**
 * Class representing the facility selection page.
 */
class FacilitySelectionPage {
    /**
     * Creates an instance of FacilitySelectionPage.
     */
    constructor() {
      /**
       * @property {string} PROVINCE_SELECT_XPATH - XPath for the province select element.
       */
      this.PROVINCE_SELECT_XPATH = "//select[contains(@placeholder,'Province')]";
  
      /**
       * @property {string} DISTRICT_SELECT_XPATH - XPath for the district select element.
       */
      this.DISTRICT_SELECT_XPATH = "//select[contains(@placeholder,'District')]";
  
      /**
       * @property {string} FACILITY_INPUT_XPATH - XPath for the facility input element.
       */
      this.FACILITY_INPUT_XPATH = "//input[@type='text']";
  
      /**
       * @property {string} ENTER_BUTTON_XPATH - XPath for the enter button element.
       */
      this.ENTER_BUTTON_XPATH = "//button[@type='submit']";
  
      /**
       * @property {string} FACILITY_DIV_XPATH - Dynamic XPath for the facility div element.
       */
      this.FACILITY_DIV_XPATH = "";
    }
  
    /**
     * Sets the XPath for the facility div element dynamically.
     * @param {string} facility - The facility to search for.
     */
    setFacilityDivXPath(facility) {
      this.FACILITY_DIV_XPATH = `//div[contains(text(),'${facility}')]`;
    }
  
    /**
     * Sets the facility by selecting the given province, district, and facility.
     * @param {string} province - The province to select.
     * @param {string} district - The district to select.
     * @param {string} facility - The facility to enter.
     */
    setFacility(province, district, facility) {
      this.setFacilityDivXPath(facility);
  
      cy.xpath(this.PROVINCE_SELECT_XPATH)
        .should('be.visible')
        .select(province);
      cy.xpath(this.DISTRICT_SELECT_XPATH)
        .should('be.visible')
        .select(district);
      cy.xpath(this.FACILITY_INPUT_XPATH)
        .should('be.visible')
        .click();
      cy.xpath(this.FACILITY_DIV_XPATH)
        .should('be.visible')
        .click();
      cy.xpath(this.ENTER_BUTTON_XPATH)
        .should('be.visible')
        .click();
    }
  }
  
  export default FacilitySelectionPage;
  