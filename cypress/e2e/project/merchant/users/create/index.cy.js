import { describe } from "mocha";


describe('Merchant List', () => {
    it('Go to page', () => {
        cy.visit('https://testmerchant.rubikpara.com/users');
        //cy.wait(3000); AÇ
    })
})

describe('New Merchant', () => {


    it('Set new user', () => {
        cy.get('[class="p-element m-2 p-button-outlined p-button-primary p-button p-component ng-star-inserted"]').click();
        cy.wait(1000);
    })

    it('Set name', () => {
        cy.get('#input-name').type("abc");
    })
    it('Set surname', () => {
        cy.get('#input-surname').type("xyz");
    })

    it('Set role', () => {
        // cy.get('[class="ng-tns-c130-44 p-dropdown p-component"]').click('#p-highlighted-option');
        cy.window().then(t => {
            t.document.querySelector('p-dropdown .p-dropdown-trigger').click()
            t.document.querySelector('p-dropdown li').click()
        })
    })

    it('Set phone number', () => {
        cy.get('#input-mobilePhoneNumber').type("1111111111");

    })

    it('Set mail', () => {
        cy.get('#input-email').type("test@test.com");
    })
    it(' New Merchant-No valid Set submission', () => {
        cy.get('[class="p-element me-2 p-button-outlined p-button p-component"]').click();
        // cy.wait(0.1 * 1000);
        cy.contains('Hata').should('exist');
        //  cy.screenshot();
        //  cy.wait(4 * 1000); AÇ
    })


    it('Set phone number', () => {
        cy.get('#input-mobilePhoneNumber').clear().type("458742596");

    })

    it('Set mail', () => {
        cy.get('#input-email').clear().type("cihan.nalbant@rubikpara.com");
        cy.get('[class="p-element me-2 p-button-outlined p-button p-component"]').click();
        cy.contains('Hata').should('exist');
        // cy.screenshot();
        //  cy.wait(4 * 1000); AÇ
    })
    it('Set phone number', () => {
        cy.get('#input-mobilePhoneNumber').clear().type("1111111111");

    })

    it('Set mail--x-xx', () => {
        cy.get('#input-email').clear().type("cihan.nalbant@rubikpara.com");
        cy.get('[class="p-element me-2 p-button-outlined p-button p-component"]').click();
        cy.contains('Hata').should('exist');
        //  cy.screenshot();
        //  cy.wait(4 * 1000); AÇ

    })


})

describe('New Merchant Valid', () => {
    let email = Math.random().toString().substring(3, 6) + "@rubikpara.com";
    let phone = Math.random().toString().substring(3, 13);

    it('Set phone number', () => {
        cy.get('#input-mobilePhoneNumber').clear().type(phone);

    })

    it('Set mail', () => {

        cy.get('#input-email').clear().type(email);
        cy.get('[class="p-element me-2 p-button-outlined p-button p-component"]').click();
        cy.contains('Başarılı').should('exist');
        cy.wait(6 * 1000);

    })


})
describe('Merchant', () => {

    it('Edit Merchant', () => {
        cy.get('#input-email').clear().type();
        cy.get('[class="p-element me-2 p-button-outlined p-button p-component"]').click();
        cy.contains('Başarılı').should('exist');

    })


})




