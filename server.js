const next = require('next');
const Hapi = require('hapi');
const Good = require('good');
const { pathWrapper, defaultHandlerWrapper } = require('./next-wrapper');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const server = new Hapi.Server();

const pluginOptions = [
  {
    register: Good,
    options: {
      reporters: {
        console: [{
          module: 'good-console',
        }, 'stdout'],
      },
    },
  },

];

app.prepare()
.then(() => {
  server.connection({ port: 3000 });
  server.register(pluginOptions)
  .then(() => {
    // server.route({
    //   method: 'GET',
    //   path: '/a',
    //   handler: pathWrapper(app, '/a'),
    // });
    //

    server.route({
      method: 'GET',
      path: '/{p*}', /* catch all route */
      handler: defaultHandlerWrapper(app),
    });


    server.start().catch(error => {
      console.log('Error starting server');
      console.log(error);
    }).then(() => {
      console.log('> Ready on http://localhost:3000');
    });
  });
});
