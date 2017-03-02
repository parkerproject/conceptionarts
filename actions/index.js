import axios from 'axios';
import { FETCH_EVENTS } from './types';

// let githubApi = "https://api.github.com";
// if (__CLIENT__) {
// 	const { protocol, hostname, port } = window.location;
// 	githubApi = `${protocol}//${hostname}:${port}/api/github`;
// }

export function getEvents() {
  return (dispatch) => {
    dispatch({
      type: FETCH_EVENTS,
      payload: { name: 'parker' },
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
