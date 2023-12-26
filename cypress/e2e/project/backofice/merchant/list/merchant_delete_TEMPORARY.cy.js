describe('Go to Page', () => {
    it('Selection', () => {
        cy.visit('https://testbackoffice.rubikpara.com/merchant-appeals');
        cy.wait(2000);
    })
})
describe('Select Merchant', () => {
    it('Process', () => {
        cy.get('table tr td [type="button"]').first().click();

    })
})
describe('Merchant Delete', () => {
    it('Process', () => {
        cy.get('[class="p-element me-2 p-button-outlined p-button-danger p-button p-component ng-star-inserted"]')
            .click();
        cy.wait(1000);
        cy.get('p-dropdown [class="p-dropdown-trigger ng-tns-c130-72"]').click();
        cy.wait(0.5 * 1000);
        cy.get('[class="p-ripple p-element p-dropdown-item"]').contains('Diğer').click();
        cy.get('#input-rejectReason').type("TEST");
        cy.get('[class="p-element me-2 p-button-outlined p-button-primary p-button p-component ng-star-inserted"]')
            .contains('Evet').click();
        cy.contains('Başarılı').should('exist');

    })

})