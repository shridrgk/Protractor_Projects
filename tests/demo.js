const { EIDRM } = require("constants");

describe('testing program', function () {
    it('Addition test', function () {

        //  browser.get('http://www.angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/')
        element(by.model('first')).sendKeys("3");
        element(by.model('second')).sendKeys("5");

        element(by.id('gobutton')).click();

        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('8');
        element(by.css("h2[class='ng-binding']")).getText().then(function (res) {
            console.log(res)
        });

    });

});

