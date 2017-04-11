const http = require('http');
const app = require('./app');
require('mongoose');
require('./connection');

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log('server is running on', server.address());
})