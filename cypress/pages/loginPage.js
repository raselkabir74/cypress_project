import { LOGIN_LOCATORS } from '../support/locators'
import { APP_URL } from '../support/app_url_endpoints'

export default class LoginPage {
  constructor() {
    this.username = Cypress.env('CREDENTIALS').USERNAME
    this.password = Cypress.env('CREDENTIALS').PASSWORD
  }

  logIn = () => {
    cy.visit(APP_URL.LOGIN)
    cy.get(LOGIN_LOCATORS.USERNAME).type(this.username)
    cy.get(LOGIN_LOCATORS.PASSWORD).type(this.password)
    cy.get(LOGIN_LOCATORS.LOGIN_FORM).submit()
    this.setAuthCookieValue()
  }

  setAuthCookieValue = () => {
    cy.getCookie(Cypress.env('USER_COOKIE')).then((cookie) => {
      Cypress.env('AUTH_COOKIE', cookie.value)
    })
  }
}
