module.exports = function(mongoose){
  var models = {};
  models.agenda = require('./agenda.js');
  models.feedbacks = require('./feedback')(mongoose).model;

  return models;
};
