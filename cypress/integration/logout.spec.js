describe('Logout', () =>{
    it('Logout via perfil', () =>{
        cy.login('renata@email.com', '12345678')
        cy.contains('Settings').click()
        cy.url().should('include', '/settings')
        cy.get('.btn-outline-danger').click()
    })
})