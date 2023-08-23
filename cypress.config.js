const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: "https://hp-api.onrender.com/api",
    specPattern: "cypress/api-tests/*.spec.{js,jsx,ts,tsx}",
  },
  video: false,
});
