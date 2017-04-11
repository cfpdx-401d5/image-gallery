const express = require('express');
const app = express();
const morgan = require('morgan');
const images = require('../routes/images-route');
require('./connection');

const cors = require('cors')();

app.use(morgan('combined'));
app.use(cors);
app.use('/images', images);


module.exports = app;

