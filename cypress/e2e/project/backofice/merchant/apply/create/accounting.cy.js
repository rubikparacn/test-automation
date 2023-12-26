describe('Accounting info', () => {
    
    it('Set turnover', () => {
        cy.get('#input-monthlyTurnover').type("1000");
    })

    it('Set bank', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[2].click()
            t.document.querySelector('p-dropdown li').click()
        })

        // cy.window().then(t => {
        //     t.$x(`//*[contains(text(),'Banka')]`)[0].click();
        //     t.$x(`//*[contains(text(),'Akbank')]`)[0].click();
        // })
    })
    
    it('Set IBAN', () => {
        cy.get('#input-iban').type("TR760009901234567800100001");
    })

})