describe('Login Merchant', () => {
    it('Go to login page', () => {
        cy.visit('https://testbackoffice.rubikpara.com/');
        cy.wait(3000);
    })

    it('Set phone number', () => {
        cy.get('[name="phone"]').type("5398472784");
    })
    it('Set phone number', () => {
        cy.get('[name="password"]').type("169918");
    })

    it('Submit form', () => {
        cy.get('form button').click();
    })

})