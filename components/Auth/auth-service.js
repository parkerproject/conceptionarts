import axios from 'axios';
import { validateStatus } from '../../helpers';

const AUTH_URL = 'http://localhost:4000/api/auth';// 'https://conceptionarts-api.herokuapp.com/api/auth';
export default class AuthService {
  constructor() {
    // this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    // this.getProfile = this.getProfile.bind(this);
  }

  async login(email, password) {
    // Get a token
    const res = await axios.post(AUTH_URL, { email, password }, { validateStatus });

    if (res.data && res.data.token) {
      this.setToken(res.data.token);
    }

    return res.data;
  }

  loggedIn() {
    const token = this.getToken();
    return !!token;
  }


  async resetPassword(email, password) {
    // Get a token
    const res = await axios.post(`${AUTH_URL}/resetpassword`, { email, password });

    if (res.data && res.data.token) {
      this.setToken(res.data.token);

      return true;
    }

    return false;
  }

  // /api/auth/resetpassword


  // getProfile(){
  //   // Retrieves the profile data from localStorage
  //   const profile = localStorage.getItem('profile')
  //   return profile ? JSON.parse(localStorage.profile) : {}
  // }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('conception_token', idToken);
  }

  getToken() {
    return localStorage.getItem('conception_token');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('conception_token');
  }

  // checkStatus(response) {
  //   // raises an error in case response status is not a success
  //   if (response.status >= 200 && response.status < 300) {
  //     return response
  //   } else {
  //     var error = new Error(response.statusText)
  //     error.response = response
  //     throw error
  //   }
  // }

  // fetch(url, options){
  //   // performs api calls sending the required authentication headers
  //   const headers = {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   }
  //
  //   if (this.loggedIn()){
  //     headers['Authorization'] = 'Bearer ' + this.getToken()
  //   }
  //
  //   return fetch(url, {
  //     headers,
  //     ...options
  //   })
  //   .then(this.checkStatus)
  //   .then(response => response.json())
  // }
}
