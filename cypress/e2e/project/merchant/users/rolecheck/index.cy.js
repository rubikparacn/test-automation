


// describe('Main Page', () => {
//     it('Go To Page', () => {
//         cy.visit('https://testmerchant.rubikpara.com/dashboard');
//         cy.wait(5 * 1000);
//         const condition = true;
//         if (condition) {
//             cy.get('[class="card-body"]').should('exist');
//         } else {
//             it('Main Page with/without Login', () => {

//             })
//             it('Login Page', () => {
//                 cy.get('#input-phone').type(5398472784);
//                 cy.get('#input-password').type(169918);
//                 cy.get('[class="p-element p-button p-component"]').click();
//                 //cy.wait(3*1000); AÇ

//             })
//         }

//     })
// })


describe('Merchant List', () => {
    it('Go To Page', async () => {
        cy.visit('https://testmerchant.rubikpara.com/users');
        cy.wait(3000);
        let loopContinue = true;
        while (loopContinue) await cy.get('table').then(async ($table) => {
            if ($table.text().includes('onur.gokay@rubikpara.com')) {
                loopContinue = false;
                await cy.contains('onur.gokay@rubikpara.com').closest('tr').find('button').eq(0).click();
            }
            else {
                await cy.get('.p-paginator-next').click();
                cy.wait(0.5 * 1000)
            }
        })
    })

})


describe('Merchant Role Check', () => {
    it('Set User', () => {
        cy.wait(1000);
        cy.window().then(t => {
            t.document.querySelector('p-dropdown .p-dropdown-trigger').click();
            // cy.wait(7000)
            t.document.querySelectorAll('p-dropdown li')[0].click();
        })

    })
})



