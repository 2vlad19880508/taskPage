const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({
  video: true,
  videosFolder: '../videos',
  screenshotsFolder: '../screenshots',
  chromeWebSecurity: false,
  viewportHeight: 1200,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        readFile: (fileNameAndPath) => {
          //  Make a promise to tell Cypress to wait for this task to complete
          return new Promise((resolve) => {
            fs.readFile(fileNameAndPath, 'utf8', (err, data) => {
              if (data !== null && data !== undefined) {
                  resolve(data);
              } else {
                  resolve(err);
              }
            });
          });
        }
      })
    },
  },
});
