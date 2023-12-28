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