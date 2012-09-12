module.exports = function(mongoose){
  var models = {};
  models.feedbacks = require('./models/feedback')(mongoose).model;

  return models;
};
