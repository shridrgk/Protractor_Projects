let homepage = function () {
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let gobutton = element(by.css('[ng-click="doAddition()"]'));
    this.enterFirstNumber = function (firstNo) {
        firstNumber.sendKeys(firstNo);

    };

    this.get = function (url) {
        browser.get(url);
    }

    this.enterSecondNumber = function (secondNo) {
        secondNumber.sendKeys(secondNo);

    };

    this.clickGo = function () {
        gobutton.click();
    };

    this.VerifyResult = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }
};

module.exports = new homepage();