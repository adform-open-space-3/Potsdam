module.exports = function(mongoose) {

  this.model = mongoose.model(
      'feedbacks',
      new mongoose.Schema({
        answer: String
      })
  );

  return this;
};
