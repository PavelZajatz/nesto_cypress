
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "watchForFileChanges": true,
    "defaultCommandTimeour": 10000,
    "baseUrl": "https://app.qa.nesto.ca",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});