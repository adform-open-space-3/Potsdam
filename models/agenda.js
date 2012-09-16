var urlify = require('urlify').create( {
  szToSs: true,
  spaces: '-',
  nonPrintable: '-',
  trim: true
});

var agenda = require('./agenda.json');

agenda.forEach(function(element) {
  element.Url = urlify(element.Presenter).toLowerCase();
});

module.exports = agenda;
