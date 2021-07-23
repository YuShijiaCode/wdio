const {config} = require('./wdio.conf');
const androidInfo = require('./android.info');
const path = require('path');

// appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        automationName: 'uiautomator2',
        maxInstances: 1,
        noReset: false,
        fullReset: false,
        deviceName: androidInfo.deviceName,
        platformVersion: androidInfo.platformVersion,
        appPackage: androidInfo.appPackage,
        appActivity: androidInfo.appActivity,
        isHybridApp:true
        // app: path.resolve('apps/' + androidInfo.app)
    }
];

config.specs = [
    'APP/src/testFiles/androidNative/**/*.js'
];

config.filesToWatch = [
    // watch for all JS files in my app
    'APP/src/testFiles/androidNative/**/*.js'
],

exports.config = config;

