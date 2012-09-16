var _ = require('underscore');

var urlify = require('urlify').create( {
  szToSs: true,
  spaces: '-',
  nonPrintable: '-',
  trim: true
});

var agenda = require('./agenda.json');

_.each(agenda, function(item) {
  item.Url = urlify(item.Presenter).toLowerCase();
});

module.exports = agenda;