module.exports = function(mongoose) {

  this.model = mongoose.model(
      'users',
      new mongoose.Schema({
        feedbacks: [{
          presenter: String,
          rating: Number
        }]
      })
  );

  return this;
};
