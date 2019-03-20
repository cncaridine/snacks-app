const mongoose = require('mongoose');

//  snackz schema
const SnackzSchema = new mongoose.Schema({
  snacker: { type: String },
  snack: { type: String },
  continent: { type: String },
  description: { type: String, max: 300 },
  img: { type: String },
  like: { type: Number, min: 0}
})

// snackz model
const Snack = mongoose.model('snack', SnackzSchema);

module.exports = Snack;
