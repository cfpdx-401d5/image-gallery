const app = require('express')();
const resources = require('./routes/resources');
const morgan = require('morgan')('dev');
const cors = require('cors')();

app.use(cors);
app.use(morgan);

app.use('/resources', resources);

module.exports = app;
