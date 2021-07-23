const ActionHelper = require('./../helpers/actionHelpers');
class loginPage extends ActionHelper{


    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        this.pause(2);
    }

    userName(){ return $('id:user__userid')}
    passWord(){ return $('id:user__password')}
    loginBth(){ return $('id:user__login')}

    skipAds(){
        this.pause(10);
        browser.touchAction(
            { action: 'tap', x: 500, y: 1900 }
        )
    }

}

module.exports = new loginPage();