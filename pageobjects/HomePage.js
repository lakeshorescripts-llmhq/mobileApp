// ./pageobjects/HomePage.js
const PropertiesReader = require('properties-reader');
const props = PropertiesReader('./config.properties');

class HomePage {
  get homeIcon() {
    return $(props.get('homeIcon'));
  }

  async verifyHomeScreenVisible() {
    await this.homeIcon.waitForDisplayed({ timeout: 10000 });
    expect(await this.homeIcon.isDisplayed()).toBe(true);
  }
}

module.exports = new HomePage();
