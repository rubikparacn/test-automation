describe('Merchant Page', () => {
    it('Go To Page', () => {
        cy.visit('https://testbackoffice.rubikpara.com/merchants?page=1');
        cy.wait(4000);
    })
})
describe('Search for Merchant', () => {
    it('Search in Table', async() => {
        let loopContinue = true;
        while (loopContinue) await cy.get('table').then(($table) => {
            if ($table.text().includes('www.rubikpara.com')) {
                loopContinue = false;
                cy.contains('www.rubikpara.com').closest('tr').find('button').eq(1).click()
                cy.wait(11000);
            }
            else {
                cy.get('.p-paginator-next').click();
                cy.wait(0.5 * 1000)
            }
        })
        
    })
})
describe('Enter POS Info', () => {
    it('Select POS', () => {
        cy.window().then(t => {
            let randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[18].click();
            let index = randomInteger(0, t.document.querySelectorAll('p-dropdownitem li').length);
            t.document.querySelectorAll('p-dropdown li')[index].click();
        })
        cy.wait(1000);
    })
    it('Sub Business ID', () => {
        cy.get('#input-subMerchantCode').type('111111111111111')
        cy.wait(1000);
    })
    it('Add POS', () => {
        cy.get('form').contains('Yeni Pos Ekle ').parent().children().click()
        cy.wait(1000);
    })
})
describe('Summit', () => {
    it('Save', () => {
        cy.get('[class="p-element m-2 p-button-outlined p-button p-component ng-star-inserted"]').click()
    })
}) 