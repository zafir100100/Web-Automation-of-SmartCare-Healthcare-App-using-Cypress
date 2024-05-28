/**
 * Class representing the login page.
 */
class LoginPage {
  /**
   * Creates an instance of LoginPage.
   */
  constructor() {
    /**
     * @property {string} BASE_URL - The base URL of the staging environment.
     */
    this.BASE_URL = "https://staging-scweb.arcapps.org/";
    
    /**
     * @property {string} USERNAME_XPATH - XPath for the username input field.
     */
    this.USERNAME_XPATH = "//input[@type='text']";
    
    /**
     * @property {string} PASSWORD_XPATH - XPath for the password input field.
     */
    this.PASSWORD_XPATH = "//input[@type='password']";
    
    /**
     * @property {string} LOGIN_BUTTON_XPATH - XPath for the login button.
     */
    this.LOGIN_BUTTON_XPATH = "//button[@type='submit']";
  }

  /**
   * Navigates to the login page.
   */
  gotoLoginPage() {
    cy.visit(this.BASE_URL);
  }

  /**
   * Performs the login action.
   * @param {string} username - The username to login with.
   * @param {string} password - The password to login with.
   */
  doLogin(username, password) {
    cy.xpath(this.USERNAME_XPATH)
      .should('be.visible')
      .type(username);
    cy.xpath(this.PASSWORD_XPATH)
      .should('be.visible')
      .type(password);
    cy.xpath(this.LOGIN_BUTTON_XPATH)
      .should('be.visible')
      .click();
  }
}

export default LoginPage;
