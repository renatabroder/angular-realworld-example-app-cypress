describe('Comentários', () =>{
    it('Escrever', () => {
        cy.login('renata@email.com', '12345678')
        cy.contains('Global Feed'). click()
        cy.get('.preview-link').first().click()
        cy.get('.form-control').type('Arrasou!')
        cy.get('.btn-primary').click()
        cy.contains('Arrasou!')
    })
})