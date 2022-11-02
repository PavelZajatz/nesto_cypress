import {LoginPage} from "./pages/login_page"
import {ApplicationPage} from "./pages/application_page"

const loginPage = new LoginPage()
const applicationPage = new ApplicationPage()

beforeEach(() => {
  Cypress.on ('uncaught:exception', (err, runnable) => {
  return false
  })
})

beforeEach(function(){
  //cy.visit('https://app.qa.nesto.ca/login')
  cy.visit('/login')
})

describe('All Login Tests', function () {
  it ('login with valid credentials', function() {
    loginPage.enterUsername(Cypress.env('userEmail'))
    loginPage.enterPassword(Cypress.env('userPassword'))
    loginPage.clickLogin()
    applicationPage.checkWelcomeBackMsg()
  })

  it ('login with no credentials', function() {
    loginPage.clickLogin()
    loginPage.checkRequiredError()
  })

  it ('login with no password', function() {
    loginPage.enterUsername(Cypress.env('userEmail'))
    loginPage.clickLogin()
    loginPage.checkRequiredError()
  })

  it ('login with invalid email format', function() {
    loginPage.enterUsername('email')
    loginPage.clickLogin()
    loginPage.checkEmailValidationError()
  })

  it ('login with invalid email', function() {
    loginPage.enterUsername('invalid_email@ktasy.com')
    loginPage.enterPassword(Cypress.env('userPassword'))
    loginPage.clickLogin()
    loginPage.checkInvalidPasswordToast()
  })

  it ('login with invalid password', function() {
    loginPage.enterUsername(Cypress.env('userEmail'))
    loginPage.enterPassword('******')
    loginPage.clickLogin()
    loginPage.checkInvalidPasswordToast()
  })
})