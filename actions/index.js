import axios from 'axios';
// import { FETCH_EVENTS } from './types';

// let githubApi = "https://api.github.com";
// if (__CLIENT__) {
// 	const { protocol, hostname, port } = window.location;
// 	githubApi = `${protocol}//${hostname}:${port}/api/github`;
// }
import { FETCH_USER_PROFILE, FETCH_USER_TICKETS } from '../actions/types';

const BASE_URL = 'http://localhost:4000/api';// 'https://conceptionarts-api.herokuapp.com/api';

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

export function getProfile() {
  return (dispatch) => {
    axios.get(`${BASE_URL}/artist/profile`, {
      headers: { authorization: localStorage.getItem('conception_token') },
    })
      .then(response => {
        dispatch({
          type: FETCH_USER_PROFILE,
          payload: response.data,
        });
      });
  };
}
