import axios from 'axios';
import Router from 'next/router';

import {
  FETCH_USER_PROFILE,
  FETCH_USER_TICKETS,
  FLASH_MESSAGE,
  AUTH_USER,
  FETCH_EVENTS,
 } from '../actions/types';

export const BASE_URL = 'http://api.conceptionevents.com/api';// 'https://conceptionarts-api.herokuapp.com/api'; // api
export const IMAGE_URL = 'https://artistworks.s3-us-west-2.amazonaws.com/artists_images';

export function register(formData) {
  return (dispatch) => {
    axios.post(`${BASE_URL}/register`, formData)
      .then(res => {
        if (res.data === 1) {
          dispatch({
            type: FLASH_MESSAGE,
            payload: { show: true },
          });
          Router.push('/login');
        } else {
          dispatch({
            type: FLASH_MESSAGE,
            payload: { show: true, msg: 'Email already registered' },
          });
        }
      });
  };
}

export function authUser(status) {
  return (dispatch) => {
    dispatch({
      type: AUTH_USER,
      payload: { authenticated: status },
    });
  };
}


export function getVenue(venueId, next) {
  axios.get(`${BASE_URL}/venues/${venueId}`)
  .then((res) => {
    next(res.data);
  })
  .catch(err => console.log(err));
}

export function getEvents() {
  return (dispatch) => {
    axios.get(`${BASE_URL}/events`)
    .then(res => {
      dispatch({
        type: FETCH_EVENTS,
        payload: res.data.events,
      });
    });
  };
}


export function getArtists(showId, next) {
  axios.get(`${BASE_URL}/artists/${showId}`)
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


export function getAttendees(eventId) {
  return (dispatch) => {
    axios.get(`${BASE_URL}/attendees/${eventId}`, {
      headers: { authorization: localStorage.getItem('conception_token') },
    })
      .then(response => {
        dispatch({
          type: FETCH_USER_TICKETS,
          payload: response.data,
        });
      });
  };
}


export function updateProfile(formProps) {
  return (dispatch) => {
    axios.post(`${BASE_URL}/artist/update`, formProps, {
      headers: { authorization: localStorage.getItem('conception_token') },
    })
      .then(response => {
        dispatch({
          type: FETCH_USER_PROFILE,
          payload: response.data,
        });
        dispatch({
          type: FLASH_MESSAGE,
          payload: { show: true },
        });
      })
      .catch(err => console.log(err));
  };
}

export function updateProfileImage(formProps) {
  return (dispatch) => {
    axios.post(`${BASE_URL}/artist/image`, formProps, {
      headers: { authorization: localStorage.getItem('conception_token') },
    })
      .then(response => {
        dispatch({
          type: FETCH_USER_PROFILE,
          payload: response.data,
        });
        dispatch({
          type: FLASH_MESSAGE,
          payload: { show: true },
        });
      })
      .catch(err => console.log(err));
  };
}

export function sendGalleryFile(formData) {
  return (dispatch) => {
    axios.post(`${BASE_URL}/artist/gallery`, formData, {
      headers: { authorization: localStorage.getItem('conception_token') },
    })
    .then(response => {
      dispatch({
        type: FETCH_USER_PROFILE,
        payload: response.data,
      });
      dispatch({
        type: FLASH_MESSAGE,
        payload: { show: true },
      });
    })
    .catch(err => console.log(err));
  };
}

export function hideFlash() {
  return (dispatch) => {
    window.setTimeout(() => {
      dispatch({
        type: FLASH_MESSAGE,
        payload: { show: false },
      });
    }, 5000);
  };
}


export function selectEvent(text, eventId, userToken) {
  return (dispatch) => {
    axios.post(`${BASE_URL}/artist-select`, { text, eventId, userToken }, {
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

export function latestNews(email) {
  axios.post(`${BASE_URL}/latest-news`, { email }, {
    headers: { authorization: localStorage.getItem('conception_token') },
  })
  .then(response => {
    console.log(response);
  });
}
