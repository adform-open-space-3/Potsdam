var express = require('express'),
    mongoose = require('mongoose'),
    http = require('http'),
    path = require('path'),
    expressUglify = require('express-uglify'),
    routes = require('./routes'),
    models = require('./models')(mongoose),
    app = express();

app.locals.title = 'Agile Tour Vilnius 2012';

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'topsecret' }));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, '/public')));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.use(express.logger());

  mongoose.connect('mongodb://localhost/potsdam');
});

app.configure('production', function(){
  app.use(express.errorHandler());
  app.use(expressUglify.middleware({
    src: __dirname + '/public'
  }));

  mongoose.connect(process.env.MONGOLAB_URI);
});

routes(app, models);

http.createServer(app).listen(app.get('port'));
