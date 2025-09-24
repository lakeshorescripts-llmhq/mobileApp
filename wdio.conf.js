const PropertiesReader = require('properties-reader');
const props = PropertiesReader('./config.properties');

require('dotenv').config();

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ['./test/app.test.js'],
  services: [],

  capabilities: [{
    platformName: 'Android',
    deviceName: 'Samsung Galaxy S21',
    platformVersion: '12.0', // Optional: specify version if needed
    app: process.env.BROWSERSTACK_APP_ID, // Make sure this is an APK file
    automationName: 'UiAutomator2',
  }],

  logLevel: 'info',
  framework: 'mocha',
  mochaOpts: {
    timeout: 60000
  }
};
