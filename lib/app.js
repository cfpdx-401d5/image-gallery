const app = require('express')();
const morgan = require('morgan')('dev');
const cors = require('cors')();

const bunnyRouter =  require('./routes/images');

const errorHandler = require('./error-handler')();

app.use(morgan);

app.use(cors);

app.use('/images', bunnyRouter);

app.use(errorHandler);

module.exports = app;