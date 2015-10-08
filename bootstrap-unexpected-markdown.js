/*global unexpected:true*/
unexpected = require('unexpected')
    .installPlugin(require('./lib/unexpectedColor'));
unexpected.output.preferredWidth = 80;
