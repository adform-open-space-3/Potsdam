var urlify = require('urlify').create( {
  szToSs: true,
  spaces: '-',
  nonPrintable: '-',
  trim: true
});

var agenda = require('./agenda.json');

agenda.forEach(function(element) {
  var presenters = element.Presenters;

  element.Presenter = presenters.map(function(presenter) {
    return presenter.Name;
  }).join(', ');

  element.Img = function() {
    if (presenters.length === 1) {
      return presenters[0].Img;
    }
    return presenters[Math.floor(Math.random()*presenters.length)].Img;
  };

  element.Url = urlify(element.Presenter).toLowerCase();

  matches = element.Time.match(/(\d{1,2})\.(\d\d) - (\d{1,2}).(\d\d)/);
  element.StartHours = matches[1];
  element.StartMinutes = matches[2];
});

module.exports = agenda;
