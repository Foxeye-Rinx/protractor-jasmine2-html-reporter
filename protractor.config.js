let chromeDriverPath = process.platform === "win32" ? "node_modules/chromedriver/lib/chromedriver/chromedriver.exe" : "node_modules/chromedriver/bin/chromedriver";
// An example configuration file
exports.config = {

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine2',

    directConnect: true,
    
    chromeDriver: chromeDriverPath,

    specs: ['test/**/*[sS]pec.js'],

    onPrepare: function() {

        var Jasmine2HtmlReporter = require('./index.js');

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports/'
        }));

    }
};