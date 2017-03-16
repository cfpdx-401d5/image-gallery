const http = require('http');
const app = require('./lib/app');
const server = http.createServer(app);
const PORT = 8000;

server.listen(PORT, () => {
    console.log(' server is listening ', server.address());
});
