// ./pageobjects/EnvironmentPage.js
const PropertiesReader = require('properties-reader');
const props = PropertiesReader('./config.properties');

class EnvironmentPage {
  get radioButtonUAT() {
    return $(props.get('radioButtonUAT'));
  }

  get continueButton() {
    return $(props.get('continueButton'));
  }

  async selectUATEnvironment() {
    await this.radioButtonUAT.waitForDisplayed({ timeout: 10000 });
    await this.radioButtonUAT.click();
    await this.continueButton.click();
  }
}

module.exports = new EnvironmentPage();
