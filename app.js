var express = require('express');
var app = module.exports = express();
var mongoose = require('mongoose');

var config = require('./config.js')(app, express, mongoose);

require('./routes')(app);

app.listen(process.env.PORT || 3000);
