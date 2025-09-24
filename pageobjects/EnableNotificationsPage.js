// ./pageobjects/NotificationsPage.js
const PropertiesReader = require('properties-reader');
const props = PropertiesReader('./config.properties');

class NotificationsPage {
  get enableNotificationsButton() {
    return $(props.get('enableNotificationsButton'));
  }

  get notNowLink() {
    return $(props.get('notNowLink'));
  }

  async skipNotifications() {
    await this.enableNotificationsButton.waitForDisplayed({ timeout: 10000 });
    await this.notNowLink.click();
  }
}

module.exports = new NotificationsPage();
