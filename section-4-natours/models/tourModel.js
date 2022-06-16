const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Missing tour name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'Missing tour price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
