// ./pageobjects/NotificationsPage.js
const PropertiesReader = require('properties-reader');
const props = PropertiesReader('./config.properties');

class NotificationsPage {
  get enableNotificationsButton() {
    return driver.isAndroid
      ? $(props.get('enableNotificationsButton'))
      : $(props.get('enableNotificationsButtonIOS'));
  }

  get notNowLink() {
    return driver.isAndroid
      ? $(props.get('notNowLink'))
      : $(props.get('notNowLinkIOS'));
  }

  async skipNotifications() {
    await this.enableNotificationsButton.waitForDisplayed({ timeout: 10000 });
    await this.notNowLink.click();
  }

  async enableNotifications() {
    await this.enableNotificationsButton.waitForDisplayed({ timeout: 10000 });
    await this.enableNotificationsButton.click();
  }
}

module.exports = new NotificationsPage();
