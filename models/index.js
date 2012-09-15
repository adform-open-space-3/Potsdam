module.exports = function(mongoose){
  var models = {};
  models.agenda = require('./agenda.js');
  models.feedback = require('./feedback')(mongoose).model;

  return models;
};
