const { createYield } = require( "typescript" )

describe('Tags', () =>{
    it('Adicionar', () =>{
        cy.login('renata@email.com', '12345678')
        cy.contains('renata').click()
        cy.location('pathname').should('contains', '/profile')
        cy.get('.article-preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.get('[placeholder="Enter tags"]').type('couve{enter}')
        cy.get('[placeholder="Enter tags"]').type('flor{enter}')
        cy.contains('Publish Article').click()
        cy.get('.tag-list').contains('couve')
    })
})