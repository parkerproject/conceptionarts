import axios from 'axios';
// import { FETCH_EVENTS } from './types';

// let githubApi = "https://api.github.com";
// if (__CLIENT__) {
// 	const { protocol, hostname, port } = window.location;
// 	githubApi = `${protocol}//${hostname}:${port}/api/github`;
// }

export function getVenue(venueId, next) {
  axios.get(`https://conceptionarts-api.herokuapp.com/api/venues/${venueId}`)
  .then((res) => {
    next(res.data);
  })
  .catch(err => console.log(err));
}


export function getArtists(showId, next) {
  axios.get(`https://conceptionarts-api.herokuapp.com/api/artists/${showId}`)
  .then((res) => {
    next(res.data);
  })
  .catch(err => console.log(err));
}
