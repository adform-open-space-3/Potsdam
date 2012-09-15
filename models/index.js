module.exports = function(mongoose){
  var models = {};
  models.agenda = require('./agenda.js');
  models.user = require('./user')(mongoose).model;

  return models;
};
