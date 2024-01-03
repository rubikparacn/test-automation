describe('Login Merchant', () => {
    it('Go to login page', () => {
        cy.visit('https://testmerchant.rubikpara.com/');
        cy.wait(3000);
    })

    it('Set phone number', () => {
        cy.get('[1id="input-phone"]').type("5386374155");
    })
    it('Set password', () => {
        cy.get('[name="password"]').type("145632");
    })

    it('Submit form', () => {
        // cy.get('form button').click();
        cy.get('form').contains("Oturum Aç").click();
    })

    it('Resolve otp', () => {
        cy.wait(25 * 1000);
        let code = '';
        cy.readFile('api/otp.txt', 'utf8').then(str => {
            code = str;
            cy.writeFile('api/otp.txt', '');
            cy.log(code);
            cy.get('[name="code"]').type(code);
            cy.get('form button').click();
            cy.wait(5 * 1000);
        });
    })

})