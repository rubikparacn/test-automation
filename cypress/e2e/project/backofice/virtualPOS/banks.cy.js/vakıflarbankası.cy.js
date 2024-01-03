const submitOrDelete = ()=> {
    it('Submit', () => {
        cy.get('[class="p-element me-2 p-button-outlined p-button p-component"]').click();
        cy.wait(1000)
        // Hata kodu alındığı durumlarda için
        cy.get('body').invoke('text').then(item => {
            let isExist = item.includes('İlgili kayıt sistemde mevcut !')
            cy.log("tesaŞ " + isExist);
            if (isExist) {
                cy.wait(7000);
                cy.get('[class="p-element p-button-secondary p-button-outlined p-button p-component"]').click();
            }
            else {
                context('Find POS', () => {
                    cy.contains(' Pos Listesi ').parent().parent().contains('testPOS')
                        .should('exist')
                        .closest('tr').find('[icon="pi pi-times"]').click();
                })
                context('Passive POS', () => {
                    cy.contains('Uyarı').parent().parent().contains('Evet').click();
                })
            }

        })



    })
}
describe('VAKIFLAR BANKASI', () => {
    it('Go to page', () => {
        cy.visit('https://testbackoffice.rubikpara.com/pos');
        cy.wait(3000);
    })
    it('New POS', () => {
        cy.get('[class="p-element m-2 p-button-outlined p-button-primary p-button p-component ng-star-inserted"]').click()
        cy.wait(3000);
    })
    it('Bank Choice', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[0].click();
            t.document.querySelectorAll('p-dropdownitem li')[12].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })
    it('EnrollmentUrl', () => {
        cy.get('div .content').contains('EnrollmentUrl').parent().type('www.enrollment.com')
    })
    it('Set MerchantId', () => {
        cy.get('div .content').contains('MerchantId').parent().type('test.test')
    })    
    it('Password', () => {
        cy.get('div .content').contains('Password').parent().type('123789')
    })
    it('Pos No', () => {
        cy.get('div .content').contains('Pos No').parent().type('123456')
    })    
    it('Set SearchUrl', () => {
        cy.get('div .content').contains('SearchUrl').parent().type('www.searchURL.com')
    })
    it('Set Terminal No', () => {
        cy.get('div .content').contains('Terminal No').parent().type('123456')
    })
    it('Set 3DSecureURL', () => {
        cy.get('div .content').contains('ThreeDSecureUrl').parent().type('www.3dsecureurl.com')
    })
    it('Check 3D Secure', () => {
        cy.get('form').contains('Tam Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Yarım Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Güvenliksiz').parent().children('p-checkbox').click();
    })

    submitOrDelete();
})