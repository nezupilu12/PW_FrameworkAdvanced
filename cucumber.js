const { format } = require("node:path");
require('dotenv').config();

module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['step-definitions/**/*.ts', 'support/**/*.ts'],
    requireModule: ['tsx/cjs'],

    format:[
      'progress',
      'html:reports/cucumber-report.html'
    ]
  },
};