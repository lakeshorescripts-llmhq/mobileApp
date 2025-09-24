require('dotenv').config();
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const { BROWSERSTACK_USERNAME, BROWSERSTACK_ACCESS_KEY, APP_FILE_PATH } = process.env;

if (!BROWSERSTACK_USERNAME || !BROWSERSTACK_ACCESS_KEY || !APP_FILE_PATH) {
  console.error('❌ Missing required environment variables.');
  process.exit(1);
}

const form = new FormData();
form.append('file', fs.createReadStream(APP_FILE_PATH));

axios.post('https://api-cloud.browserstack.com/app-automate/upload', form, {
  auth: {
    username: BROWSERSTACK_USERNAME,
    password: BROWSERSTACK_ACCESS_KEY,
  },
  headers: form.getHeaders(),
})
.then(response => {
  console.log(`✅ App uploaded successfully. app_url: ${response.data.app_url}`);
})
.catch(error => {
  console.error('❌ Failed to upload app:', error.response?.data || error.message);
});
