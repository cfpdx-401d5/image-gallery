const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    }
});

const Image = mongoose.model('Image', schema);
module.exports = Image;