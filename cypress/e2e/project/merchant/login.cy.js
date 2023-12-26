describe('Login Merchant', () => {
    it('Go to login page', () => {
        cy.visit('https://testmerchant.rubikpara.com/');
        cy.wait(3000);
    })

    it('Set phone number', () => {
        cy.get('[id="input-phone"]').type("5386374155");
    })
    it('Set password', () => {
        cy.get('[name="password"]').type("145632");
    })

    it('Submit form', () => {
        // cy.get('form button').click();
        cy.get('form').contains("Oturum Aç").click();
    })

})