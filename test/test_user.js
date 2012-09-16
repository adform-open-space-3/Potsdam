var mongoose = require('mongoose');
var should = require('should');
var models = require('../models')(mongoose);

describe('User', function() {
  describe('#getFeedback()', function() {
    it('should return an empty object when there are no feedbacks', function() {
      var user = new models.User();
      var feedback = user.getFeedback();
      should.not.exist(feedback);
    });
  });

  describe('#addFeedback()', function() {
    it('should set rating to null if it is less than zero', function() {
      var user = new models.User();
      user.addFeedback({
        presenter: 'vader',
        rating: -1
      });
      should.not.exist(user.feedbacks[0].rating);
    });
  });
});
