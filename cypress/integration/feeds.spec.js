describe('Feed', () =>{
    it('Ver feeds', () => {
        cy.login('renata@email.com', '12345678')
        cy.get('.nav-pills > .nav-item:nth-child(1) > .nav-link').click()
        cy.get('.nav-pills > .nav-item:nth-child(2) > .nav-link').click()
        cy.get('app-article-preview:nth-child(1) .btn').click()
        
        
    })
})