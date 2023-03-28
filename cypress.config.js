const { defineConfig } = require("cypress");
const mysql = require('cypress-mysql');
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  // ...
  e2e: {
    setupNodeEvents(on, config) {
      mysql.configurePlugin(on);
      on('task', {downloadFile});
      on('task', verifyDownloadTasks);
    },
    env: {
      db: {
        host: "localhost",
        user: "root",
        password: "123456",
        database: "hr"
      }
    }
  }
})