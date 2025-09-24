describe('Launch App Test', () => {
  it('should display the environment selection screen', async () => {
    // Replace with your actual accessibility ID or selector
    const radioButtonUAT = await $('//android.view.ViewGroup[@content-desc="UAT(wwwtest)"]/android.widget.ImageView');

    // Wait for the element to appear
    await radioButtonUAT.waitForDisplayed({ timeout: 10000 });

    // Assert it's visible
    expect(await radioButtonUAT.isDisplayed()).toBe(true);
  });

  it('should allow selecting UAT environment and continue', async () => {
    const radioButtonUAT = await $('//android.view.ViewGroup[@content-desc="UAT(wwwtest)"]/android.widget.ImageView');
    const continueButton = await $('//android.widget.Button[@content-desc="Continue"]');
    await radioButtonUAT.click();
    await continueButton.click();
  });

  it('should display the rewards intro screen', async () => {
    const joinNowButton = await $('//android.widget.Button[@content-desc="Join Now"]');
    const alreadyAMemberButton = await $('//android.widget.Button[@content-desc="Already a Member?"]');
    const maybeLaterLink = await $('//android.widget.TextView[@text="Maybe Later"]');
    await joinNowButton.waitForDisplayed({ timeout: 10000 });
    expect(await joinNowButton.isDisplayed()).toBe(true);
  });

  it('should allow skipping the rewards intro', async () => {
    const maybeLaterLink = await $('//android.widget.TextView[@text="Maybe Later"]');
    await maybeLaterLink.click();
  });

  it('should display the enable notifications screen', async () => {
    const enableNotificationsButton = await $('//android.widget.Button[@content-desc="enableNotification"]');
    await enableNotificationsButton.waitForDisplayed({ timeout: 10000 });
    expect(await enableNotificationsButton.isDisplayed()).toBe(true);
  });

  it('should allow skipping enabling notifications', async () => {
    const notNowLink = await $('//android.widget.TextView[@text="Not Now"]');
    await notNowLink.click();
  });

  it('should display the main app screen', async () => {
    const homeIcon = await $('//android.view.View[@content-desc="Home"]');
    await homeIcon.waitForDisplayed({ timeout: 10000 });
    expect(await homeIcon.isDisplayed()).toBe(true);
  });

});


// homeIcon=//android.view.View[@content-desc="Home"]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[2]
// shopIcon=//android.view.View[@content-desc="Shop"]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView[1]
// accountIcon=//android.view.View[@content-desc="Account"]
// rewardsIcon=//android.view.View[@content-desc="Rewards"]
// storesIcon=//android.view.View[@content-desc="Stores"]