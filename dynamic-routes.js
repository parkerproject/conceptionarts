const createDynamicRoutes = require('nextjs-dynamic-routes').default;

module.exports = createDynamicRoutes({
  '/artist': '/artist/:user_token',
  '/show': '/show/:id/:city',
  // works for any number of params
});
