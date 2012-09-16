module.exports = function(mongoose) {
  var models = {};
  models.agenda = require('./agenda.js');
  models.User = require('./user')(mongoose).model;

  return models;
};
