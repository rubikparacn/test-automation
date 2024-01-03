// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// import fetch from 'node-fetch';
Cypress.on('fail', (err, runnable) => {
  // Cypress.runner.stop();
  // Cypress.Screenshot();

  
  

  throw err
  // return false
})
// Cypress.on('command:end', (test) => {
//   if (test.state === 'failed'|| test.state === 'passed') {
//       return q.fcall(function () {
//       }).delay(4000);
//   }
// });

import 'cypress-mochawesome-reporter/register';


console.log(new Date(), 'hello');


