import axios from 'axios';
// import { FETCH_EVENTS } from './types';

// let githubApi = "https://api.github.com";
// if (__CLIENT__) {
// 	const { protocol, hostname, port } = window.location;
// 	githubApi = `${protocol}//${hostname}:${port}/api/github`;
// }

export async function getVenue(venueId) {
  const response = await axios.get(`https://conceptionarts-api.herokuapp.com/api/venues/${venueId}`);

  return response.then((res) => {
    console.log(res);
    return res ? res.name : '';
  });
}
