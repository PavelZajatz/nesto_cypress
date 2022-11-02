export class ApplicationPage{

    dashboard_welcome_back_msg = '#dashboard_welcomeBack'

    
    checkWelcomeBackMsg(){
        cy.get(this.dashboard_welcome_back_msg)
            .should('be.visible')
            .should('have.text', 'Welcome back')
    }
}