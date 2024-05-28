/**
 * Class representing the service point page.
 */
class ServicePointPage {
    /**
     * Creates an instance of ServicePointPage.
     */
    constructor() {
      /**
       * @property {string} VITAL_LINK_XPATH - XPath for the vital link.
       */
      this.VITAL_LINK_XPATH = "//a[@href='/vitals']";
    }
  
    /**
     * Clicks on the vital link to navigate to the vitals page.
     */
    clickVital() {
      cy.xpath(this.VITAL_LINK_XPATH)
        .should('be.visible')
        .click();
    }
  }
  
  export default ServicePointPage;
  