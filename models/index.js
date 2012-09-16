module.exports = function(mongoose) {
  var models = {};
  models.agenda = require('./agenda');
  models.User = require('./user')(mongoose).model;

  return models;
};
