// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})





// Cypress.Commands.add('loopTable', { text:'required'}, async ($text) => { 
//     while (loopContinue) await cy.get('table').then(async ($table) => {
//         if ($table.text().includes($text)) {
//             loopContinue = false;
//             await cy.contains($text).closest('tr').find('button').eq(0).click();
//         }
//         else {
//             await cy.get('.p-paginator-next').click();
//             cy.wait(2000)
//         }
//     })
//  })

//  cy.loopTable('onur@rubikpara.com')