// ./pageobjects/HomePage.js
const PropertiesReader = require('properties-reader');
const props = PropertiesReader('./config.properties');

class HomePage {
  get searchField() {
    return driver.isAndroid
      ? $(props.get('searchField'))
      : $(props.get('searchFieldIOS'));
  }

  get homeIcon() {
    return driver.isAndroid
      ? $(props.get('homeIcon'))
      : $(props.get('homeIconIOS'));
  }

  async verifyHomeScreenVisible() {
    await this.homeIcon.waitForDisplayed({ timeout: 10000 });
    expect(await this.homeIcon.isDisplayed()).toBe(true);
  }
}

module.exports = new HomePage();
