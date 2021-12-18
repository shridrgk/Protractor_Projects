
const using = require('jasmine-data-provider');
let homepage = require('../Pages/homepage');
let d = require('../tests/data.js')

describe('Demo calcul9ator tests', function () {
    using(d.datadrive, function (data, description) {
        it('addtion test: ' + description, function () {



            homepage.get('http://juliemr.github.io/protractor-demo/')

            homepage.enterFirstNumber(data.firstinput);
            homepage.enterSecondNumber(data.secondinput);
            homepage.clickGo();
            homepage.VerifyResult(data.result);
            browser.sleep(2000)
        });




    })

});