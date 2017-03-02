module.exports = {
  method: 'GET',
  path: '/api',
  handler(request, reply) {
    return reply({ result: 'Hello hapi!' });
  },

};
