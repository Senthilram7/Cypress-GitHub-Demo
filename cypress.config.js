const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({

 /* "retries": {


    "runmode": 1
  }, */
  
  projectId: '794t2m',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      
      on('file:preprocessor', cucumber())

      // implement node event listeners here
    },
    //specPattern: 'cypress/Integration/examples/*.js'

    specPattern: 'cypress/Integration/examples/E2E-Validation.js'
  },

  chromeWebSecurity: false
});
