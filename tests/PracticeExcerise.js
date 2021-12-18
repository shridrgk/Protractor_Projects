const { element } = require("protractor");

describe('testing program', function () {

    function selectitems(product) {
        element.all(by.tagName('app-card')).each(function (item) {
            item.element(by.css('h4 a')).getText().then(function (add) {
                if (add == product) {
                    item.element(by.css('button[class*="btn-info"]')).click();
                }
            });
        });
    }
    it('Ecom test', function () {
        var sum = 0
        browser.get('https://qaclickacademy.github.io/protocommerce/');
        browser.manage().window().maximize();
        element(by.name('name')).sendKeys('shridhara ramaswamy');
        element(by.css('input[name="email"]')).sendKeys('rshridhara13@gmail.com');
        element(by.id('exampleInputPassword1')).sendKeys('password2');
        element(by.css('input[type="checkbox"]')).click();
        element(by.cssContainingText('[id="exampleFormControlSelect1"]', 'Female')).click();
        element.all(by.name('inlineRadioOptions')).first().click();
        element.all(by.buttonText('Submit')).click().then(function () {
            element(by.css('div[class*="success"]')).getText().then(function (text) {
                console.log(text)
            });

            element(by.name('name')).clear();
            element(by.name('name')).sendKeys('M').then(function () {
                element(by.css('[class="alert alert-danger"]')).getText().then(function (err) {
                    console.log(err)
                });
            })
            element(by.linkText('Shop')).click();


            selectitems("Samsung Note 8")
            selectitems("iphone X")


            element(by.partialLinkText('Checkout')).getText().then(function (count) {
                var res = count.split("(")
                expect(res[1].trim().charAt(0)).toBe("2")
            });

            element(by.css('a[class="nav-link btn btn-primary"]')).click();

            element.all(by.css('tr td:nth-child(4)[class="col-sm-1 col-md-1 text-center"] strong')).each(function (item) {
                item.getText().then(function (text) {

                    var cart = text.split(".")
                    console.log(Number(cart[1]))
                    sum = sum + Number(cart[1])

                })


            });

            element(by.css('tr td[class="text-right"]')).getText().then(function (res) {
                var total = res.split(".")
                expect(Number(total[1])).toEqual(sum)

                console.log(Number(total[1]))
                console.log(sum)
            });





        });
    })
})