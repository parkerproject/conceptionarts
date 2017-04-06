const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const envset = {
  production: process.env.NODE_ENV === 'production',
};

const port = envset.production ? (process.env.PORT || process.env.PORT) : 5000;

app.prepare()
.then(() => {
  const server = express();

  server.get('/show/:id/:city', (req, res) => {
    console.log(1);
    app.render(req, res, '/show', req.params);
  });

  server.get('/artist/:user_token', (req, res) => {
    console.log(req.params);
    app.render(req, res, '/artist', req.params);
  });

  // server.get('/b', (req, res) => app.render(req, res, '/a', req.query));

  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.info('==> ✅  Server is listening');
  });
});
