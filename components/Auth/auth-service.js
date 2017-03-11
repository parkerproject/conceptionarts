import axios from 'axios';
import { validateStatus } from '../../helpers';

const AUTH_URL = 'https://conceptionarts-api.herokuapp.com/api/auth';
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
