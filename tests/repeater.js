
describe('testing program', function () {
    it('Addition test', function () {

        //  browser.get('http://www.angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys("3");
        element(by.model('second')).sendKeys("5");

        element(by.id('gobutton')).click();
        // element.all(by.repeater('result in memory'))

        element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function (res) {
            console.log(res)
        })



    });

});