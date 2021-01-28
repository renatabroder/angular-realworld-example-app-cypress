describe('Cadastro', () =>{
    const usuario = 'usuario' + (new Date()).getTime()
    const senha = 'senha' + (new Date()).getTime()

    it('Novo Usuário', () =>{
        cy.visit('/register');
        cy.get('[formControlname=username]').type(usuario)
        cy.get('[formControlname=email]').type(usuario + "@email.com")
        cy.get('[formControlname=password]').type(senha)
        cy.get('.btn').click()
        cy.contains('.nav-item:nth-child(4) > .nav-link', usuario).should('be.visible')
    })

    it('Usuário já existe', () =>{
        cy.visit('/register');
        cy.get('[formControlname=username]').type(usuario)
        cy.get('[formControlname=email]').type(usuario + "@email.com")
        cy.get('[formControlname=password]').type(senha)
        cy.get('.btn').click()
        cy.location('pathname').should('equal', '/register')
        cy.get('.error-messages > li:nth-child(1)').should('not.be.empty')
    })

})