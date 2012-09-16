module.exports = function(app, models) {
  app.get('/', function(req, res) {
    doWithUser(req, res, function(user) {
      res.render('index', {
        agenda: models.agenda,
        user: user
      });
    });
  });

  app.get('/:presenter', function(req, res) {
    var presentation;
    for (var i = 0; i<models.agenda.length; i++) {
      var item = models.agenda[i];
      if (item.Url === req.params.presenter.toLowerCase()) {
        presentation = item;
      }
    }

    doWithUser(req, res, function(user) {
      res.render('presentation', {
        presentation: presentation,
        feedback: user.getFeedback(presentation.Url) || {}
      });
    });
  });

  app.post('/feedback', function(req, res) {
    doWithUser(req, res, function(user) {
      user.addFeedback(req.body);
      user.save();
      res.redirect('/');
    });
  });

  function doWithUser(req, res, callback) {
    var uid = req.cookies.uid;
    if (uid) {
      models.User.findById(uid, function(err, user) {
        if (user) {
          callback(user);
        }
        else {
          createUser(req, res, callback);
        }
      });
    }
    else {
      createUser(req, res, callback);
    }
  }

  function createUser(req, res, callback) {
    var user = new models.User();
    callback(user);
    res.cookie('uid', user._id, { maxAge: 2419200000}); //4 weeks
  }
};
