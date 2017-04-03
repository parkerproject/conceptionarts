import axios from 'axios';
import { validateStatus } from '../../helpers';
import { BASE_URL } from '../../actions';

export default class AuthService {
  constructor() {
    // this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    // this.getProfile = this.getProfile.bind(this);
  }

  async login(email, password) {
    // Get a token
    const res = await axios.post(`${BASE_URL}/auth`, { email, password }, { validateStatus });

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
    const res = await axios.post(`${BASE_URL}/auth/resetpassword`, { email, password });

    if (res.data && res.data.token) {
      this.setToken(res.data.token);

      return true;
    }

    return false;
  }

  // auth/forgotpassword

  async forgotPassword(email) {
    const res = await axios.post(`${BASE_URL}/auth/forgotpassword`, { email });
    return res;
  }


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


}
