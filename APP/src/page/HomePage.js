const ActionHelper = require('./../helpers/actionHelpers');

class HomePage extends ActionHelper{

    logoutBtn(){ return $("//*[@resource-id='android:id/button1']")}



}

module.exports = new HomePage();