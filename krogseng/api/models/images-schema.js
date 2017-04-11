const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Image = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
});

module.exports = mongoose.model('Image', Image);

