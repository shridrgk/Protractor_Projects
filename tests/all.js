
describe('testing program', function () {
    it('Addition test', function () {

        //  browser.get('http://www.angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/');
        function add(a, b) {
            element(by.model('first')).sendKeys(a);
            element(by.model('second')).sendKeys(b);

            element(by.id('gobutton')).click();
        }

        add(3, 5);
        add(5, 4);
        add(5, 5);
        element.all(by.repeater('result in memory')).count().then(function (res1) {
            console.log(res1)
        });

        element.all(by.repeater('result in memory')).each(function (item) {

            item.element(by.css("td:nth-child(3)")).getText().then(function (res) {
                console.log(res)
            })


        })

    });

});