const cors = require('cors')();
const express = require('express');
const app = express();
const schnoodles = require('./routes/schnoodle');
const ErrorHandler = require('./error-handler');

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(cors);
app.use('/', schnoodles);
app.use(ErrorHandler);

module.exports = app;