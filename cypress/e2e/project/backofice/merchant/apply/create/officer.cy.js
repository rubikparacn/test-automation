describe('Authorized Person', () => {

    it('Set identity no', () => {
        cy.get('#input-IdentityNumber').type("35236169015");
    })

    it('Set name', () => {
        cy.get('#input-authorizedPersonName').type("abc");
    })

    it('Set surname', () => {
        cy.get('#input-authorizedPersonSurname').type("xyz");
    })

    it('Set birthday', () => {
        cy.get('p-calendar input').type("15/12/2024 17:30");
        cy.wait(1000);

    })


    it('Set email', () => {
        cy.get('#input-email').type("test1@rubikpara.com", { force: true });
    })

    it('Set Phone 1', () => {
        cy.get('#input-CompanyPhoneNumber').type("2168472786");
    })

    it('Set Phone 2', () => {
        cy.get('#input-mobilePhoneNumber').type("5325880376");
    })

    it('Set Phone 3', () => {
        cy.get('#input-mobilePhoneNumberSecond').type("5325171855");
    })



    it('Submit form', () => {
        cy.get('form button[type=submit]').click();
        cy.wait(2*1000);
        cy.contains('Hata').should('not.exist');
        cy.screenshot();
        cy.wait(2*1000);

    })

})