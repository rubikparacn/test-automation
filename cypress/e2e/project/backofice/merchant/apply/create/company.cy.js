describe('Merchant Apply', () => {
    it('Go to page', () => {
        cy.visit('https://testbackoffice.rubikpara.com/merchant-appeals/create');
        cy.wait(3000);
    })
})

describe('Company info', () => {


    it('Set company type', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[0].click()
            t.document.querySelector('p-dropdown li').click()
        })
    })
    it('Set name', () => {
        cy.get('#input-merchantName').type("Test Company3");
    })
    it('Set title', () => {
        cy.get('#input-commercialTitle').type("Test Company3");
    })

    it('Set tax location', () => {
        cy.window().then(t => {
            cy.window().then(t => {
                t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[1].click()
                t.document.querySelector('p-dropdown li').click()
            })
        })
    })


    it('Set tax number', () => {
        cy.get('#input-taxNumber').type("5567649806");
    })
    it('Set mrs number', () => {
        cy.get('#input-tradeRegistrationNumber').type("12312312334231512");
    })

})