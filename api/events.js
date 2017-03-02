// const axios = require('axios');
// const url
//
// const BASE_URL = 'https://www.eventbriteapi.com/v3';
// const USER_ID = '6894501025';
//
// module.exports = {
//   method: 'GET',
//   path: '/api/events',
//   handler: {
//   //     axios.get(`${BASE_URL}/events/search?organizer.id=${USER_ID}`, {
//   //       headers: { authorization: `Bearer ${process.env.TOKEN}` },
//   //     })
//   //  .then((response) => {
//   //    reply(response.data);
//   //  }).catch(err => console.log('cannot search=>', err));
//
//     proxy: {
//       passThrough: true,
//       mapUri(request, callback) {
//         callback(null, url.format({
//           protocol: 'https',
//           host: 'api.github.com',
//           pathname: request.params.path,
//           query: request.query,
//         }));
//       },
//       onResponse(err, res, request, reply/** , settings, ttl **/) {
//         reply(res);
//       },
//     },
//
//
//     // return reply({ result: 'Hello hapi!' });
//   },
// };

export default function ({ req, res, params }, { dir, dev }) {
  return { message: 'Hello world!' };
}
