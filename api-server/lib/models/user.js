const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const Image = require('./image');

const schema = new Schema({
    username: { type: String, required: true },
    hash: { type: String, required: true },
    images: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    }
}) 

schema.virtual('password').set(function(password) {
    this.hash = bcrypt.hashSync(password, 8);
});

schema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash);
};

const User = mongoose.model('User', schema);
module.exports = User;