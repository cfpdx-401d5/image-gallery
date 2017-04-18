const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')();
const errorHandler = require('./error-handler')();
const bunnies = require('./routes/bunnies');

// dev tool to see requests in terminal
app.use(morgan('dev'));

app.use(cors);

app.use(errorHandler);

app.use('/bunnies', bunnies);

module.exports = app;
