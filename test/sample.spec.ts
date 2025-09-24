describe('Sample Appium Test', () => {
  it('should launch the app', async () => {
    const appTitle = await $('~AppTitle');
    await expect(appTitle).toBeDisplayed();
  });
});
