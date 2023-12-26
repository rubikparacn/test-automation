describe('Merchant Apply Approve', () => {
    it('Go to page', () => {
        cy.visit('https://testbackoffice.rubikpara.com/merchant-appeals/');
        cy.wait(3000);
    })
})

describe('Approve', () => {
    it('Select', () => {
        cy.get('table tr td button').eq(0).click();
    })

    it('Approve', () => {
        cy.get('p-dialog button.p-button-success').click();
    })

    it('Confirm', () => {
        cy.get('p-dialog button.p-button-primary').click();
    })

   

})