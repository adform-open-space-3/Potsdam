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
};
