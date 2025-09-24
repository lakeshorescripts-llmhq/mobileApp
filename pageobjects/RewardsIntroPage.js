// ./pageobjects/RewardsIntroPage.js
const PropertiesReader = require('properties-reader');
const props = PropertiesReader('./config.properties');

class RewardsIntroPage {
  get joinNowButton() {
    return $(props.get('joinNowButton'));
  }

  get alreadyAMemberButton() {
    return $(props.get('alreadyAMemberButton'));
  }

  get maybeLaterLink() {
    return $(props.get('maybeLaterLink'));
  }

  async skipIntro() {
    await this.joinNowButton.waitForDisplayed({ timeout: 10000 });
    await this.maybeLaterLink.click();
  }
}

module.exports = new RewardsIntroPage();
