// ./pageobjects/RewardsIntroPage.js
const PropertiesReader = require('properties-reader');
const props = PropertiesReader('./config.properties');

class RewardsIntroPage {
  get joinNowButton() {
    return driver.isAndroid
      ? $(props.get('joinNowButton'))
      : $(props.get('joinNowButtonIOS'));
  }

  get alreadyAMemberButton() {
    return driver.isAndroid
      ? $(props.get('alreadyAMemberButton'))
      : $(props.get('alreadyAMemberButtonIOS'));
  }

  get maybeLaterLink() {
    return driver.isAndroid
      ? $(props.get('maybeLaterLink'))
      : $(props.get('maybeLaterLinkIOS')) ;
  }

  async skipIntro() {
    await this.joinNowButton.waitForDisplayed({ timeout: 10000 });
    await this.maybeLaterLink.click();
  }
}

module.exports = new RewardsIntroPage();
