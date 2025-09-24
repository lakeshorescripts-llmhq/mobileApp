const EnvironmentPage = require('../pageobjects/EnvironmentPage');
const RewardsIntroPage = require('../pageobjects/RewardsIntroPage');
const NotificationsPage = require('../pageobjects/EnableNotificationsPage');
const HomePage = require('../pageobjects/HomePage');

describe('Launch App Test', () => {
  it('should display the environment selection screen', async () => {
    await EnvironmentPage.radioButtonUAT.waitForDisplayed({ timeout: 10000 });
    expect(await EnvironmentPage.radioButtonUAT.isDisplayed()).toBe(true);
  });

  it('should allow selecting UAT environment and continue', async () => {
    await EnvironmentPage.selectUATEnvironment();
  });

  it('should display the rewards intro screen', async () => {
    await RewardsIntroPage.joinNowButton.waitForDisplayed({ timeout: 10000 });
    expect(await RewardsIntroPage.joinNowButton.isDisplayed()).toBe(true);
  });

  it('should allow skipping the rewards intro', async () => {
    await RewardsIntroPage.skipIntro();
  });

  it('should display the enable notifications screen', async () => {
    await NotificationsPage.enableNotificationsButton.waitForDisplayed({ timeout: 10000 });
    expect(await NotificationsPage.enableNotificationsButton.isDisplayed()).toBe(true);
  });

  it('should allow skipping enabling notifications', async () => {
    await NotificationsPage.skipNotifications();
  });

  it('should display the main app screen', async () => {
    await HomePage.verifyHomeScreenVisible();
  });
});
