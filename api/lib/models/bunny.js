const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

  Title: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Url: {
    type: String,
    required: true
  }

});

const Bunny = mongoose.model('Bunny', schema);
module.exports = Bunny;