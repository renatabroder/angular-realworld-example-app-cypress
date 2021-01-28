const { childOfKind } = require( "tslint" )

describe('Login', () => {
    it('Login bem sucedido', () => {
        cy.login('renata@email.com', '12345678')
        cy.get('.nav-item:nth-child(4) > .nav-link').click()
        cy.get('.btn:nth-child(5)').click()
        cy.url().should('contain', '/settings')
    })

    it('Dados Inválidos', () => {
        cy.login('usuarioinexistente@email.com', 'senhaerrada')
        cy.get('.error-messages > li').should('contain', 'email or password is invalid')
    })
})