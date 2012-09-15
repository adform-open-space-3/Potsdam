module.exports = function(mongoose){
  var models = {};
  models.agenda = require('./agenda');
  models.feedbacks = require('./feedback')(mongoose).model;

  return models;
};
