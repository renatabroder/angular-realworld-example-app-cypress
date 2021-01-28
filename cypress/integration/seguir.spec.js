describe('Seguir', () =>{
    const user = 'usuario' + (new Date()).getTime()
    const password = 'senha' + (new Date()).getTime()
    it('Seguir usuário', () => {
        cy.cadastro(user, password)
        cy.wait(10000)
        cy.visit('/profile/renata')
        cy.contains('Follow').click()
    })

})