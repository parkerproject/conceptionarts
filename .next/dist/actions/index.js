'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVenue = getVenue;
exports.getArtists = getArtists;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { FETCH_EVENTS } from './types';

// let githubApi = "https://api.github.com";
// if (__CLIENT__) {
// 	const { protocol, hostname, port } = window.location;
// 	githubApi = `${protocol}//${hostname}:${port}/api/github`;
// }

function getVenue(venueId, next) {
  _axios2.default.get('https://conceptionarts-api.herokuapp.com/api/venues/' + venueId).then(function (res) {
    next(res.data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function getArtists(showId, next) {
  _axios2.default.get('https://conceptionarts-api.herokuapp.com/api/artists/' + showId).then(function (res) {
    next(res.data);
  }).catch(function (err) {
    return console.log(err);
  });
}