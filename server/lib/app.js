const app = require('express')();
const morgan = require('morgan')('dev');
const cors = require('cors')();

const bunnyRouter =  require('./routes/bunny');

const errorHandler = require('./error-handler')();

app.use(morgan);

app.use(cors);

app.use('/bunnies', bunnyRouter);

app.use(errorHandler);

module.exports = app;