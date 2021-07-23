const log4js = require('log4js');
const expect = require('chai').expect;
log.level = 'debug';
const LoginPage = require('./../../page/LoginPage');
const HomePage = require('./../../page/HomePage');
const addContext = require('mochawesome/addContext');
let request;
let response;
let timeStamp = new Date();


describe('APP test->Login Success', function() {
    this.timeout(999999999);

    beforeEach(function () {
        LoginPage.launchApp();
    });

    afterEach(function () {
            addContext(this, {
                title: 'Request',
                value: {
                    Request: request
                }
            });
            addContext(this, {
                title: 'Screenshot',
                value: {
                    data: null
                }
            });
            addContext(this, {
                title: 'EndTime',
                value: {
                    EndTime: timeStamp = new Date()
                }
            });
    });

    it('Login -> HomePage -> Drawer Menu -> history Page=> Success  ', () => {

        // Skip the notification page
        LoginPage.skipAds();
        // Wait for the userName element to appear
        LoginPage.waitUntil(LoginPage.userName());

        HomePage.pause(5);

    });

});
