module.exports = function(app, models){
  app.get('/', function(req, res){
    models.feedbacks.find({}, function(err, docs){
      res.render('index', {
          feedbacks: docs
      });
    });
  });
};
