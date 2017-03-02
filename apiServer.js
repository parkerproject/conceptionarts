const Hapi = require('hapi');
const routes = require('./api');

const server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: 1400,
});

// Start the server
server.route(routes);
server.start(() => console.log(`Server started at: ${server.info.uri}`));
