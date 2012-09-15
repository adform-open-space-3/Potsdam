module.exports = function(app, models){
  app.get('/', function(req, res){
    res.render('index', {
        agenda: models.agenda
    });
  });

  app.get('/agenda', function(req, res){
    res.render('agenda', {
      agenda: models.agenda
    });
  });

  app.get('/:presenter', function(req, res){
    var presentation;
    for (var i in models.agenda) {
      var val = models.agenda[i];
      if (val.Url === req.params.presenter.toLowerCase()) {
        presentation = val;
      }
    }

    res.render('presentation', {
      presentation: presentation
    });
  });
};
