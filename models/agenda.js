var urlify = require('urlify').create({
  szToSs: true,
  spaces: "-",
  nonPrintable: "-",
  trim: true
});

var agenda = require('./agenda.json');

for (var i in agenda) {
  var val = agenda[i];
  val.Url = urlify(val.Presenter);
}

module.exports = agenda;
