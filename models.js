module.exports = function(mongoose){
  var models = {};
  models.agenda = require('./agenda');
  models.feedbacks = require('./models/feedback')(mongoose).model;

  return models;
};
