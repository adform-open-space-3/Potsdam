module.exports = function(mongoose) {

  var schema = new mongoose.Schema({
    feedbacks: [{
      presenter: String,
      rating: Number,
      comment: String
    }]
  });

  schema.methods.getFeedback = function(presenter) {
    return this.feedbacks.filter(function(element) {
      return element.presenter === presenter;
    })[0];
  };

  schema.methods.addFeedback = function(feedback) {
    if (feedback.rating < 0) {
      feedback.rating = null;
    }

    var item = this.getFeedback(feedback.presenter);

    if (item) {
      item.rating = feedback.rating;
      item.comment = feedback.comment;
    }
    else {
      this.feedbacks.push(feedback);
    }
  };

  this.model = mongoose.model('users', schema);

  return this;
};
