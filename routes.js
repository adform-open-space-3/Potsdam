module.exports = function(app, models){
  app.get('/', function(req, res){
    res.render('index', {
        agenda: models.agenda
    });
  });

  app.get('/:presenter', function(req, res){
    var presentation;
    for (var i in models.agenda){
      var val = models.agenda[i];
      if (val.Url === req.params.presenter.toLowerCase()){
        presentation = val;
      }
    }

    res.render('presentation', {
      presentation: presentation
    });
  });

  app.post('/feedback', function(req, res){
    doWithUser(req, res, function(user){
      var feedback = {
        rating: req.body.rating,
        presenter: req.body.presenter,
      }

      user.feedbacks.push(feedback);
    });

    res.redirect('/');
  });

  function doWithUser(req, res, callback){
    var uid = req.cookies.uid;
    if (typeof uid === 'undefined'){
      var user = new models.user;
      res.cookie('uid', user._id, { maxAge: 2419200000}); //4 weeks
      callback(user);
      user.save();
    }
    else{
      models.user.findById(uid, function(err, user){
        callback(user);
        user.save();
      });
    }
  }
};
