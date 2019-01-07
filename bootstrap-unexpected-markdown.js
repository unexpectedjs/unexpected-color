/*global unexpected:true*/
unexpected = require('unexpected')
  .clone()
  .installPlugin(require('./lib/unexpectedColor'));
unexpected.output.preferredWidth = 80;
