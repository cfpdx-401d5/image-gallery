const app = require('express')();
const cors = require('cors')();
const morgan = require('morgan')('dev');

const images = require('./routes/images');
const users = require('./routes/users');
const ensureAuth = require('./auth/ensure-auth')();
const errorHandler = require('./error-handler');

app.use(morgan);
app.use(cors);

// app.use('/user', users);
app.use('/images', images);

app.use(errorHandler);

module.exports = app;
