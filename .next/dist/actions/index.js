'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEvents = getEvents;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let githubApi = "https://api.github.com";
// if (__CLIENT__) {
// 	const { protocol, hostname, port } = window.location;
// 	githubApi = `${protocol}//${hostname}:${port}/api/github`;
// }

function getEvents() {
  return function (dispatch) {
    dispatch({
      type: _types.FETCH_EVENTS,
      payload: { name: 'parker' }
    });
    // axios.get('/api/events').then(response => {
    //   dispatch({
    //     type: FETCH_EVENTS,
    //     payload: response.data.events,
    //   });
    // })
    // .catch(err => console.log(err));
  };
}