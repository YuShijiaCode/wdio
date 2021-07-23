const {config} = require('./wdio.conf');
const iosInfo = require('./ios.info');

// appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        udid: "",
        platformVersion: '13.3',
        automationName: "XCUITest",
        deviceName: "iPhone 12",
        xcodeSigningId: "iPhone Developer",
        xcodeOrgId: "LZ62U3P8MD",
        noReset: false,
        fullReset: false,
        bundleId: ""
    }
];

config.specs = [
    'APP/src/testFiles/iosNative/**/*.js'
];

exports.config = config;

