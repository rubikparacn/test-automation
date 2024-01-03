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
describe('ŞEKERBANK', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[10].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })
    it('Set 3D Anahtarı', () => {
        cy.get('div .content').contains('3D Anahtarı').parent().type('123456')
    })
    it('Set API Kullanıcı Adı', () => {
        cy.get('div .content').contains('API Kullanıcı Adı').parent().type('test.test')
    })
    it('Set API Şifresi', () => {
        cy.get('div .content').contains('API Şifresi').parent().type('111111')
    })
    it('Set API Üye İş Yeri ID', () => {
        cy.get('div .content').contains('API Üye İş Yeri ID').parent().type('123789')
    })
    it('Set Terminal No', () => {
        cy.get('div .content').contains('Terminal No').parent().type('123456')
    })    
    it('Check 3D Secure', () => {
        cy.get('form').contains('Tam Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Yarım Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Güvenliksiz').parent().children('p-checkbox').click();
    })
    
    submitOrDelete();
})