const { browser, element } = require("protractor")
describe('testing program', function () {
    it('calculator test', function () {
        function calc(a, b, c) {
            element(by.model('first')).sendKeys(a);
            element(by.model('second')).sendKeys(b);

            element.all(by.tagName('option')).each(function (item) {
                item.getAttribute("value").then(function (value) {
                    if (value == c) {
                        item.click();
                    }

                })
            });

            element(by.id('gobutton')).click();
        }


        //  browser.get('http://www.angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/');

        calc(5, 5, "ADDITION");
        calc(10, 2, "DIVISION");
        calc(21, 2, "MODULO");
        calc(15, 2, "MULTIPLICATION");
        calc(15, 2, "SUBTRACTION");

        element.all(by.repeater('result in memory')).each(function (items) {

            items.element(by.css("td:nth-child(3)")).getText().then(function (res) {
                console.log(res)
            })




        });

    });

});