module.exports = function(mongoose) {

  this.model = mongoose.model(
      'feedbacks',
      new mongoose.Schema({
        presenter: String,
        rating: Number
      })
  );

  return this;
};
