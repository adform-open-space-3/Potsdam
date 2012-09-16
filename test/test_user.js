var mongoose = require('mongoose');
var models = require('../models')(mongoose);

describe('User', function() {
  describe('#getFeedback()', function() {
    it('should return an empty object when there are no feedbacks', function() {
      var user = new models.User();
      user.getFeedback().should.equal({});
    });
  });
});
