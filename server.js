const next = require('next');
const Hapi = require('hapi');
const Good = require('good');
// const h2o2 = require('h2o2');
const { pathWrapper, defaultHandlerWrapper } = require('./next-wrapper');
// const api = require('./api');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const server = new Hapi.Server();

// add request logging (optional)
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
  // {
  //   register: h2o2,
  // },
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
      path: '/api/events',
      handler({ req, res, params }) {
        console.log('yes');
        return { message: 'Hello world!' };
      },
    });

    server.route({
      method: 'GET',
      path: '/{p*}', /* catch all route */
      handler: defaultHandlerWrapper(app),
    });


    // server.route(api);

    server.start().catch(error => {
      console.log('Error starting server');
      console.log(error);
    }).then(() => {
      console.log('> Ready on http://localhost:3000');
    });
  });
});
