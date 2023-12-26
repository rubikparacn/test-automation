describe('Select last item', () => {
    it('Selection', () => {
        cy.visit('https://testbackoffice.rubikpara.com/merchants?page=1');
        cy.wait(4000);

    })

    it('Selection - 22', () => {
        cy.get('table tr td [title="Düzenle"]').eq(0).click();
        cy.wait(18 * 1000)

    })
})


