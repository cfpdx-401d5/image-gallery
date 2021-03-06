const mongoose = require('mongoose');
mongoose.Promise = Promise;

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/image-gallery';

module.exports = mongoose.connect(dbUri);

mongoose.connection.on('connected', () => {
  console.log('You have connected to mongodb, user');
});
