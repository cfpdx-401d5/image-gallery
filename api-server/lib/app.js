const app = require('express')();
const cors = require('cors')();
const morgan = require('morgan')('dev');
const images = require('./routes/images');
const errorHandler = require('./error-handler');

app.use(morgan);
app.use(cors);

app.use('/images', images);

app.use(errorHandler);

module.exports = app;
