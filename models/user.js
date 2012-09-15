module.exports = function(mongoose) {

  var schema = new mongoose.Schema({
    feedbacks: [{
      presenter: String,
      rating: Number
    }]
  });

  schema.methods.getFeedback = function(presenter){
    for (var i in this.feedbacks){
      var item = this.feedbacks[i];
      if (item.presenter === presenter) {
        return item;
      }
    }
  }

  schema.methods.addFeedback = function(feedback){
    var item = this.getFeedback(feedback.presenter);

    if (typeof item === 'undefined'){
      this.feedbacks.push(feedback);
    }
    else{
      item.rating = feedback.rating;
    }
  }

  this.model = mongoose.model('users', schema);

  return this;
};
