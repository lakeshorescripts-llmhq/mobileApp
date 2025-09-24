// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',
  timeout: 60000,
  retries: 0,
  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'iPhone 14 Pro Max',
      use: {
        ...devices['iPhone 14 Pro Max'],
      },
    },
    {
      name: 'iPhone XS',
      use: {
        ...devices['iPhone XS'],
      },
    },
    {
      name: 'iPhone 11',
      use: {
        ...devices['iPhone 11'],
      },
    },
  ],
};
