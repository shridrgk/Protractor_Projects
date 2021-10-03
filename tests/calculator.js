
let homepage = require('../Pages/homepage');

describe('Demo calcul9ator tests', function () {
    it('addtion test', function () {


        homepage.get('http://juliemr.github.io/protractor-demo/')

        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.clickGo();
        homepage.VerifyResult('7');
        browser.sleep(2000)
    });


    it('Addition test', function () {


        homepage.get('http://juliemr.github.io/protractor-demo/')

        homepage.enterFirstNumber('5');
        homepage.enterSecondNumber('5');
        homepage.clickGo1();
        homepage.VerifyResult('10');
        browser.sleep(3000)
    });

});