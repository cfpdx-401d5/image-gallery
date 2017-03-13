const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router({
  bunnies: [],
});

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3001, function() {
  console.log('JSON mock server is running: http://localhost:3001'); 
});
