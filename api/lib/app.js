const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors')();
const errorHandler = require('./error-handler')();
const bunnies = require('./routes/bunnies');

const auth = require('./routes/auth');
const ensureAuth = require('./auth/ensure-auth')();

// dev tool to see requests in terminal
app.use(morgan('dev'));

app.use(cors);

app.use(errorHandler);

app.use('/auth', auth); // authentication / authorization route
app.use('/bunnies', ensureAuth, bunnies); // bunnies route

module.exports = app;
