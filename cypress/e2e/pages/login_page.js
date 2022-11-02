export class LoginPage{

    email_textbox = '#email'
    password_textbox = '#password'
    login_btn = '#form_signup_login'
    validation_errors_is_required = '#validation_errors_isRequired'
    validation_errors_invalid_email = '#validation_errors_invalidEmail'
    toasts_invalid_password = '#toasts_invalidPassword_title'

    enterUsername(email){
        cy.get(this.email_textbox).type(email)
    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_btn).click()
    }

    checkRequiredError(){
        cy.get(this.validation_errors_is_required).should('be.visible')
    }

    checkEmailValidationError(){
        cy.get(this.validation_errors_invalid_email).should('be.visible')
    }

    checkInvalidPasswordToast(){
        cy.get(this.toasts_invalid_password).should('be.visible')
    }
}