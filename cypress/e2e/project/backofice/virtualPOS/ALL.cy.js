// cy.window().then(t => {
//     let randomInteger = (min, max)=> Math.floor(Math.random() * (max - min + 1)) + min;

//     t.document.querySelectorAll('p-dropdown .p-dropdown-trigger')[0].click();
//     let index = randomInteger(0, t.document.querySelectorAll('p-dropdownitem li').length);
//     t.document.querySelectorAll('p-dropdownitem li')[index].click();

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
describe('AKTİF BANK', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[0].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })

    it('Check 3D Secure', () => {
        cy.get('form').contains('Tam Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Yarım Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Güvenliksiz').parent().children('p-checkbox').click();
    })

    submitOrDelete();
    
})

describe('ALTERNATİFBANK', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[1].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })

    it('Check 3D Secure', () => {
        cy.get('form').contains('Tam Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Yarım Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Güvenliksiz').parent().children('p-checkbox').click();
    })
    submitOrDelete();
})

describe('DENİZBANK', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[2].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })
    it('Set MerchantCode', () => {
        cy.get('div .content').contains('MerchantCode').parent().type('123456')
    })
    it('Set MerchantPass', () => {
        cy.get('div .content').contains('MerchantPass').parent().type('654321')
    })
    it('Set NonSecureURL', () => {
        cy.get('div .content').contains('NonSecureUrl').parent().type('www.testurl.com')
    })
    it('Set ShopCode', () => {
        cy.get('div .content').contains('ShopCode').parent().type('111')
    })
    it('Set Terminal No', () => {
        cy.get('div .content').contains('Terminal No').parent().type('123456')
    })
    it('Set 3DSecureURL', () => {
        cy.get('div .content').contains('ThreeDSecureUrl').parent().type('www.3dsecureurl.com')
    })
    it('Set UserCode', () => {
        cy.get('div .content').contains('UserCode').parent().type('123456')
    })
    it('Set UserPass', () => {
        cy.get('div .content').contains('UserPass').parent().type('123456')
    })
    it('Check 3D Secure', () => {
        cy.get('form').contains('Tam Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Yarım Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Güvenliksiz').parent().children('p-checkbox').click();
    })
    
    submitOrDelete();

})
describe('DEUTSCHEBANK', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[3].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })

    it('Check 3D Secure', () => {
        cy.get('form').contains('Tam Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Yarım Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Güvenliksiz').parent().children('p-checkbox').click();
    })
    submitOrDelete();
})
describe('DİLER YATIRIM BANKASI', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[4].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })

    it('Check 3D Secure', () => {
        cy.get('form').contains('Tam Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Yarım Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Güvenliksiz').parent().children('p-checkbox').click();
    })
    submitOrDelete();
})
describe('D YATIRIM BANKASI', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[5].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })

    it('Check 3D Secure', () => {
        cy.get('form').contains('Tam Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Yarım Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Güvenliksiz').parent().children('p-checkbox').click();
    })
    submitOrDelete();
})
describe('GARANTİ BANKASI', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[6].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })
    it('Set İşyeri No', () => {
        cy.get('div .content').contains('İş Yeri No').parent().type('123456')
    })
    it('Set PROVAUT', () => {
        cy.get('div .content').contains('PROVAUT').parent().type('654321')
    })
    it('Set PROVRFN', () => {
        cy.get('div .content').contains('PROVRFN').parent().type('123456')
    })
    it('Set Secure Key', () => {
        cy.get('div .content').contains('Secure Key').parent().type('111')
    })
    it('Set Terminal ID', () => {
        cy.get('div .content').contains('Terminal ID').parent().type('123456')
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
describe('ING BANK', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[7].click();
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
describe('İŞ BANKASI', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[8].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })
    it('API Üye İş Yeri ID', () => {
        cy.get('div .content').contains('API Üye İş Yeri ID').parent().type('123456')
    })
    it('Set MerchantName', () => {
        cy.get('div .content').contains('MerchantName').parent().type('test.test')
    })
    it('Set NonSecure URL', () => {
        cy.get('div .content').contains('NonSecure URL').parent().type('www.3dsecureurl.com')
    })
    it('Password', () => {
        cy.get('div .content').contains('Password').parent().type('123789')
    })
    it('StoreKey', () => {
        cy.get('div .content').contains('StoreKey').parent().type('123456')
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
describe('QNB FİNANSBANK', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[9].click();
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
describe('VAKIF KATILIM BANKASI', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[11].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })

    it('Check 3D Secure', () => {
        cy.get('form').contains('Tam Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Yarım Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Güvenliksiz').parent().children('p-checkbox').click();
    })
    submitOrDelete();
})
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
describe('YAPI VE KREDİ BANKASI', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[13].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })
    it('Enckey', () => {
        cy.get('div .content').contains('Enckey').parent().type('456123')
    })
    it('Set Posnet No', () => {
        cy.get('div .content').contains('Posnet No').parent().type('123456')
    })    
    it('Set Password', () => {
        cy.get('div .content').contains('Password').parent().type('123789')
    })    
    it('Set Terminal No', () => {
        cy.get('div .content').contains('Terminal No').parent().type('123456')
    })
    it('Set Üye İş Yeri No', () => {
        cy.get('div .content').contains('Üye İş Yeri No').parent().type('456132')
    })
    it('Check 3D Secure', () => {
        cy.get('form').contains('Tam Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Yarım Güvenli').parent().children('p-checkbox').click();
        cy.get('form').contains('Güvenliksiz').parent().children('p-checkbox').click();
    })

    submitOrDelete();
})
describe('ZİRAAT BANKASI', () => {
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
            t.document.querySelectorAll('p-dropdownitem li')[14].click();
            cy.wait(1000);
        })
    })

    it('Set POS name', () => {
        cy.get('#input-name').type("testPOS");
    })
    it('API Üye İş Yeri ID', () => {
        cy.get('div .content').contains('API Üye İş Yeri ID').parent().type('456123')
    })
    it('Set Merchant Name', () => {
        cy.get('div .content').contains('Merchant Name').parent().type('test.name')
    })    
    it('Set NonSecureUrl', () => {
        cy.get('div .content').contains('NonSecureUrl').parent().type('www.3dsecureurl.com')
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