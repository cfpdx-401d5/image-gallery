const express = require('express');
const app = express();
const errorHandler = require('./error-handler')();
const morgan = require('morgan');
const cors = require('cors');
const images = require('./routes/image-routes');

app.use(cors());
app.use(morgan('dev'));
app.use('/', images);
app.use(errorHandler);

module.exports = app;
