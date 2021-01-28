describe('Tags', () =>{
    beforeEach(() => {
        cy.login('renata@email.com', '12345678')
    })

    it('Adicionar', () =>{
        cy.contains('renata').click()
        cy.location('pathname').should('contains', '/profile')
        cy.get('.article-preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.get('[placeholder="Enter tags"]').type('couve{enter}')
        cy.get('[placeholder="Enter tags"]').type('flor{enter}')
        cy.contains('Publish Article').click()
        cy.get('.tag-list').contains('couve')
        cy.get('.tag-list').contains('flor')
    })

    it('Verificar se filtragem por tag funciona', () =>{
        cy.contains('Gandhi').click()
        cy.contains('Gandhi')
        cy.get(':nth-child(1) > .article-preview > .preview-link > h1').click()
        cy.get('.tag-list').contains('Gandhi')

    })

    it('Deletar tags', () =>{
        cy.contains('renata').click()
        cy.location('pathname').should('contains', '/profile')
        cy.get(':nth-child(1) > .article-preview').get('h1').first().click()
        cy.contains('Edit Article').click()
        cy.wait(1000)
        cy.get('.tag-list').contains('flor').find('i').click()
        cy.get('.tag-list').should('not.contain', 'flor')
        cy.contains('Publish Article').click()
        cy.get('.tag-list').should('not.contain', 'flor')
    })
})