// ./pageobjects/EnvironmentPage.js
const PropertiesReader = require('properties-reader');
const props = PropertiesReader('./config.properties');

class EnvironmentPage {
  get radioButtonUAT() {
    return driver.isAndroid
      ? $(props.get('radioButtonUAT'))
      : $(props.get('radioButtonUATIOS'));
  }

  get continueButton() {
    return driver.isAndroid
      ? $(props.get('continueButton'))
      : $(props.get('continueButtonIOS'));
  }

  async selectUATEnvironment() {
    await this.radioButtonUAT.waitForDisplayed({ timeout: 10000 });
    await this.radioButtonUAT.click();
    await this.continueButton.click();
  }
}

module.exports = new EnvironmentPage();
