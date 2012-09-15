module.exports = function(app, models){
  app.get('/', function(req, res){
    models.feedbacks.find({}, function(err, docs){
      res.render('index', {
          feedbacks: docs
      });
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
      if (val.Url.toLowerCase() === req.params.presenter.toLowerCase()) {
        presentation = val;
      }
    }

    res.render('presentation', {
      presentation: presentation
    });
  });
};
