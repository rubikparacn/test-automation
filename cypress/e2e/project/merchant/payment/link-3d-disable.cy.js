let l = {

}
describe('Create payment with link', () => {
    it('Go to create payment page', () => {
        cy.visit('https://testmerchant.rubikpara.com/link-payment');
        cy.wait(3000);
    })

    it('Set multiple use', () => {
        cy.get('#multipleuseType').click();
        cy.wait(300);
        cy.wait(200)
    })
    it('Set try count', () => {
        cy.get('#input-cardHolderName').type("111");
        cy.wait(1000);


    })
    //
    it('Set expire date', () => {
        cy.get('p-calendar input').type("14/12/2024 09:23");
        cy.wait(1000);

    })

    it('Set amount type', () => {
        cy.window().then(t => {
            t.document.querySelector('p-dropdown .p-dropdown-trigger').click()
            t.document.querySelector('p-dropdown li').click()
        })
        // cy.get('p-dropdown .p-dropdown-trigger').parent().click({ multiple: true });
        // cy.wait(300);
        // cy.get('p-dropdown li').click();//aria-label="Tutar Belirsiz Link"
        cy.wait(1000);

    })


    it('Set amount', () => {
        cy.get('#input-amount').type('10.00');
        cy.wait(1000);


    })

    it('Set currency', () => {
        cy.window().then(t => {
            t.document.querySelector('p-dropdown .p-dropdown-trigger').click()
            t.document.querySelector('p-dropdown li').click()
        })
        cy.wait(1000);

    })

    it('Set installment', () => {
        cy.window().then(t => {
            t.document.querySelector('p-multiselect .pi-chevron-down').click()
            t.document.querySelector('p-multiselect li').click()
        })
        // cy.get('p-multiselect .pi-chevron-down').click();
        // cy.get('p-multiselect li').click();
        cy.wait(1000);

    })

    it('Set comission', () => {
        cy.get('[for="commission"]').parent().click();
        cy.wait(1000);


    })

    it('Set product name', () => {
        cy.get('#input-productName').type("test name");
        cy.wait(1000);


    })

    it('Set product description', () => {
        cy.get('#input-productDetail').type("test desc")
        cy.wait(1000);


    })

    it('Set calback url', () => {
        cy.get('#input-url').type("https://testmerchant.rubikpara.com/link-payment")
        cy.wait(1000);


    })

    it('Set 3d required', () => {
        // cy.get('[for="isLink3dRequired"]').parent().click()
        cy.wait(1000);


    })

    it('Set optionals', () => {
        cy.get('[for="NameOptional"]').parent().click()
        cy.get('[for="EmailOptional"]').parent().click()
        cy.get('[for="PhoneNumberOptional"]').parent().click()
        cy.get('[for="AddressOptional"]').parent().click()
        cy.get('[for="NoteOptional"]').parent().click()

        cy.wait(1000);


    })

    it('Submit form', () => {
        cy.get('[type="submit"]').click()
        cy.wait(4000)

    })


    it('Close modal/popup', () => {
        cy.get('.p-dialog-content .content').then(t => l.url = t.text())
        cy.wait(1000);

    })


    //


})


describe('Pay with link', () => {
    it('Go to payment page', () => {
        cy.visit(l.url);
        cy.wait(3000);
    })

    it('Credit card info', () => {
        cy.get('#input-cardHolderName').type('test test');
        cy.wait(1000);

        cy.get('#input-cardNumber').type('4508 0345 0803 4509');
        cy.wait(1000);

        cy.get('#input-lastDate').type('12/30');
        cy.wait(1000);

        cy.get('#input-cvv').type('000');

        cy.wait(1000);


    })


    it('Set installment', () => {
        cy.window().then(t => {
            t.document.querySelector('p-dropdown .p-dropdown-trigger').click()
            t.document.querySelectorAll('p-dropdown li').click()
        })
        // cy.get('p-multiselect .pi-chevron-down').click();
        // cy.get('p-multiselect li').click();
        // cy.contains('1 Taksit').click();
        cy.wait(1000);

    })


    it('Set customer information', () => {
       
        cy.get('#input-customerFullName').type('name surname');
        cy.wait(1000);

        cy.get('#input-customerPhone').type('5386315478');
        cy.wait(1000);

        cy.get('#input-customerEmail').type('cihan.nalbant@rubikpara.com');
        cy.wait(1000);

        cy.get('#input-customerAddress').type('test adres bilgileri');
        cy.wait(1000);

        cy.get('#input-customerNote').type('not bilgisi');

        cy.wait(1000);

    })

    it('Submit form', () => {
        cy.get('[type="submit"]').click()
        cy.wait(4000)

    })
})