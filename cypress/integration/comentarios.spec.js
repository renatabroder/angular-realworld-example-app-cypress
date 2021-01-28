const { get } = require( "core-js/fn/dict" )

describe('Comentários', () =>{

    it('Escrever', () => {
        cy.login('renata@email.com', '12345678')
        cy.contains('Global Feed'). click()
        cy.get('.preview-link').first().click()
        cy.get('.form-control').type('Arrasou!')
        cy.get('.btn-primary').click()
        cy.contains('Arrasou!')
    })

    it('Apagar', () => {
        cy.login('novo-usuario@email.com', 'novo-usuario')
        cy.wait(1000)
        cy.visit('/profile/renata')
        cy.get('.preview-link').first().click()
        cy.get('.form-control').type('novo!')
        cy.get('.btn-primary').click()
        cy.contains('novo!')
        cy.get(':nth-child(2) > .card > .card-footer > .mod-options > .ion-trash-a').click()
        cy.get(':nth-child(2) > .card > .card-block > .card-text').should('not.contain', 'novo!')
    })

})