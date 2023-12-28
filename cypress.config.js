const { defineConfig } = require("cypress");

const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalStudio: true,
    testIsolation: false,
    experimentalCspAllowList: true,
    // chromeWebSecurity
    video: true,
    videoUploadOnPasses: true,
    screenshotOnRunFailure: true,


    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Inline Reporter',
      embeddedScreenshots: true,
      inlineAssets: true, //Adds the asserts inline
      reportDir:"api/public/report",
    },

  },
  video: true,
  experimentalCspAllowList: true,
  videoUploadOnPasses: true,
  screenshotOnRunFailure: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
    reportDir:"api/public",

  },

});
