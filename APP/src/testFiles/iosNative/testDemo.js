const log4js = require('log4js');
const expect = require('chai').expect;
log.level = 'debug';

const LoginPage = require('./../../page/LoginPage');
const HomePage = require('./../../page/HomePage')
const addContext = require('mochawesome/addContext');
let request;
let timeStamp = new Date();


describe('APP test-> Login -> close App=> Success', function() {
    this.timeout(999999999);

    beforeEach(function () {
        // LoginPage.launchApp();
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

    it('Login -> => Success  ', () => {

        // Skip the notification page
        HomePage.pause(10);
        LoginPage.saveScreenShot('APP/src/screenShot/ios_LoginPage.png');
        HomePage.pause(2);

    });

});
