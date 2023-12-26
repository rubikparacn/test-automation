const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    testIsolation: false,
    experimentalCspAllowList:true,
    // chromeWebSecurity
    video: true,
    videoUploadOnPasses: true,

  },
  video: true,
  experimentalCspAllowList:true,
  videoUploadOnPasses: true,
  
});
