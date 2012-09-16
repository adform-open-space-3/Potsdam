var urlify = require('urlify').create( {
  szToSs: true,
  spaces: '-',
  nonPrintable: '-',
  trim: true
});

var agenda = require('./agenda.json');

for (var i = 0; i<agenda.length; i++) {
  var val = agenda[i];
  val.Url = urlify(val.Presenter).toLowerCase();
}

module.exports = agenda;
