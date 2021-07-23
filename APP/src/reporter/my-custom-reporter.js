const { default: SpecReporter }= require('wdio-mochawesome-reporter')

class CustomReporter extends SpecReporter {

    onTestEnd(test) {
        super.onTestEnd(test);
    }
    onSuiteEnd(suite) {
        super.onSuiteEnd(suite);

    }

    onAfterCommand (cmd) {
        // const isScreenshotEndpoint = /\/session\/[^/]*\/screenshot/
        // if (isScreenshotEndpoint.test(cmd.endpoint) && cmd.result.value) {
        //     this.currTest.addScreenshotContext(cmd.result.value)
        // }

    }
}


module.exports= CustomReporter;
