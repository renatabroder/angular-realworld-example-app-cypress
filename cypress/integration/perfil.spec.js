describe('Profile', () =>{
    it('Editar Perfil', () => {
        cy.login('renata@email.com', '12345678')
        cy.contains('renata').click()
        cy.contains('Edit Profile Settings').click()
        cy.get('[formcontrolname="image"]').clear()
        cy.get('[formcontrolname="image"]').type('http://thispersondoesnotexist.com/image')
        cy.get('[formcontrolname="password"]').type('12345678')
        cy.contains('Update Settings').click()
        
    })
})