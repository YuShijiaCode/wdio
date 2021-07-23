class ActionHelper {

     getTitle() {
        return browser.getTitle();
    }

     static launchApp() {
        driver.launchApp();
    }

    static switchToNativeContext() {
        browser.switchContext('NATIVE_APP');
    }

    pause(seconds) {
        browser.pause(seconds * 1000);
    }

     isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

     click(locator) {
        $(locator).click();
    }

     waitForElement(locator, waitTimeInSeconds) {
        $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
    }

     clearText(locator) {
        $(locator).clearValue();
    }

     sendText(locator, inputText) {
        $(locator).addValue(inputText);
    }

     getText(locator) {
        return $(locator).getText();
    }

     waitUntil(selector) {
        console.log('Wait for target element: ',selector)
        selector.waitForExist({ timeout: 30000000,interval:3000});
        this.pause(2)
    }

     saveScreenShot(path){
         // browser.saveScreenshot(path);
         driver.saveScreenshot(path);
    }
    debug(){
         browser.debug();
    }

    scrollIntoTarget(selector){
         this.pause(2);
         const startPercentage = 10;
         const endPercentage = 90;
         const anchorPercentage = 50;
         const { width, height } = browser.getWindowSize();
         const anchor = height * anchorPercentage / 100;
         const startPoint = width * startPercentage / 100;
         const endPoint = width * endPercentage / 100;
         console.log('-----------startPoint: ',startPoint)
         console.log('-----------endPoint: ',endPoint)
         console.log('-----------anchor: ',anchor)
         let flag = true;
         while(flag){
             try{
                 selector.waitForDisplayed({ timeout: 500 })
                 flag = false;
             }catch (e) {
                 browser.touchPerform([
                     { action: 'press', options: { x: startPoint, y: anchor }},
                     { action: 'wait', options: { ms: 1000}},
                     { action: 'moveTo', options: { x: endPoint, y: startPoint }},
                     { action: 'release'}
                 ]);
             }
         }

    }
}

module.exports = ActionHelper;
