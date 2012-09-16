var mongoose = require('mongoose');
var should = require('should');
var models = require('../models')(mongoose);

describe('User', function() {

  var user;
  beforeEach(function() {
    user = new models.User();
  });

  describe('#getFeedback()', function() {
    it('should return an empty object when there are no feedbacks', function() {
      var feedback = user.getFeedback('vader');
      should.not.exist(feedback);
    });

    it('should return feedback which presenter matches', function() {
      user.addFeedback({
        presenter: 'vader',
        rating: 1
      });
      var feedback = user.getFeedback('vader');
      feedback.rating.should.equal(1);
    });
  });

  describe('#addFeedback()', function() {
    it('should set rating to null if it is less than zero', function() {
      user.addFeedback({
        presenter: 'vader',
        rating: -1
      });
      should.not.exist(user.feedbacks[0].rating);
    });

    it('should not add another feedback if feedback for this presenter exists)', function() {
      user.addFeedback({
        presenter: 'vader',
        rating: 1
      });
      user.addFeedback({
        presenter: 'vader',
        rating: 4
      });
      user.feedbacks.length.should.equal(1);
      user.feedbacks[0].rating.should.equal(4);
    });
  });

  describe('#hasRated()', function() {
    it('should return false if presenter was not rated', function() {
      user.hasRated('luke').should.not.be.ok;
    });

    it('should return true if presenter was rated', function() {
      user.addFeedback({
        presenter: 'vader',
        rating: 3
      });
      user.hasRated('vader').should.be.ok;
    });
  });
});
