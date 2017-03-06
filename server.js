const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const envset = {
  production: process.env.NODE_ENV === 'production',
};

const hostname = envset.production ? (process.env.HOSTNAME || process.env.HOSTNAME) : 'localhost';
const port = envset.production ? (process.env.PORT || process.env.PORT) : 3000;

app.prepare()
.then(() => {
  const server = express();

  server.get('/shows/:id/:city', (req, res) => {
    app.render(req, res, '/shows', req.query);
  });

  server.get('/artist/:user_token', (req, res) => {
    app.render(req, res, '/artist', req.query);
  });

  // server.get('/b', (req, res) => app.render(req, res, '/a', req.query));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.info('==> ✅  Server is listening');
  });
});
