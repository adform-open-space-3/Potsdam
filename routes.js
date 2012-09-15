module.exports = function(app, models){
  app.get('/', function(req, res){
    res.render('index', {
        agenda: models.agenda
    });
  });

  app.get('/:presenter', function(req, res){
    var presentation;
    for (var i in models.agenda){
      var item = models.agenda[i];
      if (item.Url === req.params.presenter.toLowerCase()){
        presentation = item;
      }
    }

    doWithUser(req, res, function(user){
      res.render('presentation', {
        presentation: presentation,
        feedback: user.getFeedback(presentation.Url)
      });
    });
  });

  app.post('/feedback', function(req, res){
    doWithUser(req, res, function(user){
      user.addFeedback(req.body);
      user.save();
    });

    res.redirect('/');
  });

  function doWithUser(req, res, callback){
    var uid = req.cookies.uid;
    if (typeof uid === 'undefined'){
      var user = new models.user;
      res.cookie('uid', user._id, { maxAge: 2419200000}); //4 weeks
      callback(user);
    }
    else{
      models.user.findById(uid, function(err, user){
        callback(user);
      });
    }
  }
};
