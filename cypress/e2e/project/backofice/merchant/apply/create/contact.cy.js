describe('Accounting info', () => {
    
    it('Set turnover', () => {
        cy.get('#input-companyEmail').type("onur.gokay@rubikpara.com");
    })

    it('Set website', () => {
        cy.get('#input-webSiteUrl').type("testcompany1.com");
    })
    it('Set country', () => {
    })
    it('Set city', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[4].click()
            t.document.querySelector('p-dropdown li').click()
        })
        // cy.window().then(t => {
        //     t.$x(`//*[contains(text(),'İlçe')]`)[0].click();
        //     t.$x(`//*[contains(text(),'Bala')]`)[0].click();
        // })
        cy.wait(2000)
    })
    it('Set state', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[5].click()
            t.document.querySelector('p-dropdown li').click()
        })
        // cy.window().then(t => {
        //     t.$x(`//*[contains(text(),'İlçe')]`)[0].click();
        //     t.$x(`//*[contains(text(),'Bala')]`)[0].click();
        // })
    })

    it('Set postal code', () => {
        cy.get('#input-postalCode').type("34555");
    })

    it('Set address', () => {
        cy.get('#input-address').type("Test Company3 No:85");
    })
    


})