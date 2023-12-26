
describe('Company info', () => {
    it('Set Sales Responsible', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[2].click()
            t.document.querySelectorAll('p-dropdown li')[3].click()
            cy.wait(1000);
        })
    })

    it('Category Code', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[3].click()
            t.document.querySelectorAll('p-dropdown li')[1].click()
            cy.wait(1000);
        })
    })
    it('VKN', () => {
        cy.get('#input-hostingTaxNo').type('79304729961')
        // Şahıs hesabı ise 11 haneli TC no, Tüzel hesap ise 10 haneli VKN girilecek.
        cy.wait(1000);
    })
    it('Sale Channel', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[7].click()
            t.document.querySelectorAll('p-dropdown li')[1].click()
            cy.wait(1000);
        })
    })
    it('Entegrator', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[8].click()
            t.document.querySelectorAll('p-dropdown li')[1].click()
            cy.wait(1000);
        })
    })
})
describe('Integration Model', () => {
    it('Pay with Link', () => {
        cy.get('#flexCheckDefault4').click()
        cy.wait(1000);
    })
})
describe('Technical Contact', () => {
    it('VKN', () => {
        cy.get('##input-technicalIdentityNo').type('81419164262')
        cy.wait(1000);
    })
    it('name', () => {
        cy.get('#input-technicalAuthorizedName').type('testisim')
        cy.wait(1000);
    })
    it('surname', () => {
        cy.get('#input-technicalAuthorizedSurname').type('testsoyisim')
        cy.wait(1000);
    })
    it('mail', () => {
        cy.get('#input-technicalEmail').type('testmail@mail.com')
        cy.wait(1000);
    })
    it('phone1', () => {
        cy.get('#input-technicalMobilePhoneNumber').type('1111111111')
        cy.wait(1000);
    })
    it('phone2', () => {
        cy.get('#input-technicalMobilePhoneNumberSecond').type('1111111112')
        cy.wait(1000);
    })
    it('phone3', () => {
        cy.get('#input-technicalCompanyPhoneNumber').type('1111111113')
        cy.wait(1000);
    })
})
describe('POS info', () => {
    it('Profile', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[17].click()
            t.document.querySelectorAll('p-dropdown li')[0].click()
            cy.wait(1000);
        })
    })
    it('Active POS', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[18].click()
            t.document.querySelectorAll('p-dropdown li')[0].click()
            cy.wait(1000);
        })
    })
    it('Sub Business ID', () => {
        cy.get('#input-subMerchantCode').type('111111111111111')
        cy.wait(1000);
    })
    it('installment authorization', () => {
        cy.get('#installmentAllowed_Check').click()
    })
    it('3D obligation', () => {
        cy.get('#is3dRequired_Check').click()
    })
    it('Pre-Provision', () => {
        cy.get('#preAuthorizationAllowed_Check').click()
    })
    it('InternationalCard Access', () => {
        cy.get('#internationalCardAllowed_Check').click()
    })
    it('Cash Back', () => {
        cy.get('#paymentReturnAllowed_Check').click()
    })
    it('Annulment', () => {
        cy.get('#paymentReverseAllowed_Check').click()
    })
})
describe('Limits', () => {

    it('Limit Check', async () => {

        const isExist = true;
        //  cy.get('table').then(function ($table)
        //    {
        //     isExist=$table[1].text().includes('Sonuç bulunamadı.')
        //    }
        // )

        isExist = !(await cy.get('table').eq(1).invoke('text')).includes('Sonuç bulunamadı.')
        cy.log('is:' + isExist);

        // const condition = true;
        // if(isExist) cy.log('Veri çoktan eklenmiş');
        // if(isExist) {
        //     if (condition) {
        //         cy.get('#pr_id_48-table').contains('Satış').should('exist');
        //     }
        //     else {
        //         it('Action Type', () => {
        //             cy.window().then(t => {
        //                 t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[19].click()
        //                 t.document.querySelectorAll('p-dropdown li')[0].click()
        //                 cy.wait(1000);
        //             })
        //         })
        //         it('Period', () => {
        //             cy.window().then(t => {
        //                 t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[20].click()
        //                 t.document.querySelectorAll('p-dropdown li')[0].click()
        //                 cy.wait(1000);
        //             })
        //         })
        //         it('Type-Number', () => {
        //             cy.window().then(t => {
        //                 t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[21].click()
        //                 t.document.querySelectorAll('p-dropdown li')[0].click()
        //                 cy.wait(1000);
        //                 cy.get('#input-merchantLimitPiece').type('10')
        //                 cy.get('[class="p-element me-2 p-button-outlined p-button p-component"]').click()
        //                 cy.wait(3000);
        //             })
        //         })
        //     }
        //     if (condition) {
        //         cy.get('#pr_id_48-table').contains('Satış').should('exist');

        //     }
        //     else {
        //         it('Action Type2', () => {
        //             cy.window().then(t => {
        //                 t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[19].click()
        //                 t.document.querySelectorAll('p-dropdown li')[0].click()
        //                 cy.wait(1000);
        //             })
        //         })
        //         it('Period2', () => {
        //             cy.window().then(t => {
        //                 t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[20].click()
        //                 t.document.querySelectorAll('p-dropdown li')[0].click()
        //                 cy.wait(1000);
        //             })
        //         })
        //         it('Type-Amount', () => {
        //             cy.window().then(t => {
        //                 t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[21].click()
        //                 t.document.querySelectorAll('p-dropdown li')[1].click()
        //                 cy.wait(1000);
        //                 cy.get('#input-merchantLimitAmount').type('3000000')
        //                 cy.get('[class="p-element me-2 p-button-outlined p-button p-component"]').click()
        //                 cy.wait(3000);
        //             })
        //         })
        //     }
        // }


    })



})
describe('Document Upload', () => {
    it('Document Type', () => {
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[22].click()
            t.document.querySelectorAll('p-dropdown li')[0].click()
            cy.wait(1000);
            cy.get('[class="p-button-label"]').click()
            cy.wait(1000);
        })
    })
})
describe('Merchant Score', () => {
    it('Document Type', () => {
        cy.get('#hasScoreCard_Check').click()
        cy.get('#input-scoreCardScore').type('100')
        cy.get('#input-findeksScore').type('100')
        cy.get('#input-alexaRank').type('1')
        cy.get('#input-googleRank').type('1')
    })
})
describe('Authorized User', () => {
    it('Document Type', () => {
        cy.contains('Yeni Kullanıcı').click()
        cy.wait(1000);
        cy.get('p-dialog').contains('Ad').parent().children('input').type('testname')
        cy.get('p-dialog').contains('Soyad').parent().children('input').type('testsurname')
        cy.window().then(t => {
            t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[24].click()
            cy.wait(1000);
            t.document.querySelectorAll('p-dropdownitem li')[0].click()
        })
        cy.get('p-dialog').contains('Cep Telefonu').parent().children('input').type('2111211111')
        cy.get('p-dialog').contains('E-posta').parent().children('input').type('tesxtx@mail.com')
        cy.get('p-dialog').contains('Kaydet').click()
        cy.get('p-dialog').contains('Evet').click()
        cy.wait(1000);

        const condition = true;

        if (condition) {
            cy.get('#cdk-overlay-0').contains('Kullanıcı zaten tanımlı').should('exist');
            cy.get('p-dialog').contains('Kapat').click()
        }
        else {
            cy.get('p-dialog').contains('Kaydet').click()
            cy.wait(1000);
        }
        cy.contains('Yeni Kullanıcı').parent().parent().children('p-table').contains('tesxtx@mail.com').should('exist');
        cy.wait(3000);
    })
})
describe('Partnership', () => {
    it('Add Partnership', () => {
        cy.contains('Yeni Ortak Ekle').click()
        cy.wait(1000)
        cy.get('p-dialog').contains('TC Kimlik Numarası').parent().type('19738675282')
        cy.get('p-dialog').contains('Ad').parent().type('testname3')
        cy.get('p-dialog').contains('Soyad').parent().type('testsurname3')
        cy.get('p-dialog').contains('Doğum Tarihi').parent().type('07.11.1996')
        cy.get('p-dialog').contains('Cep Telefonu').parent().type('4536472854')
        cy.get('p-dialog').contains('E-posta').parent().type('tesxt2@test.com')
        cy.get('p-dialog').contains('Kaydet').parent().children('button').eq(0).click()
        cy.wait(3000)

        const condition = true;

        if (condition) {
            cy.get('#cdk-overlay-0').contains('İlgili kayıt sistemde mevcut !').should('exist');
        }

        // Hata kodu alındığı durumlarda için
        else {
            cy.get('#cdk-overlay-0').contains('html').should('exist');
            cy.wait(1000);
            cy.screenshot();
            cy.wait(1000);
        }
        cy.contains('Yeni Ortak Ekle').parent().parent().children('p-table').contains('tesxt2@test.com').should('exist');

    })
})
describe('Summit', () => {
    it('Save', () => {
        cy.get('[class="p-element m-2 p-button-outlined p-button p-component ng-star-inserted"]]').click()
    })
})  