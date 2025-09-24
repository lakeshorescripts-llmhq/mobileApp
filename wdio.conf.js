const PropertiesReader = require('properties-reader');
const props = PropertiesReader('./config.properties');

require('dotenv').config();

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ['./test/app.test.js'],
  services: [],

  capabilities: [{
  platformName: 'Android', // ✅ stays at top level
  'appium:app': process.env.BROWSERSTACK_APP_ID, // ✅ W3C-compliant key
  //automationName: 'UiAutomator2',
  'bstack:options': {
    deviceName: 'Samsung Galaxy S21',
    osVersion: '12.0', // ✅ use osVersion instead of platformVersion
    
    projectName: 'dqueza mobile app',
    buildName: 'My First Build',
    appiumVersion: '2.0.0', // optional but recommended
    debug: true,
    video: true,
    networkLogs: true
  }
}],


  logLevel: 'info',
  framework: 'mocha',
  mochaOpts: {
    timeout: 60000
  }
};
