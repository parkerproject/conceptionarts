import React, { Component } from 'react';
import Link from 'next/link';
import AuthService from '../Auth/auth-service';

const auth = new AuthService();

class HeaderLogin extends Component {
  constructor() {
    super();
    this.state = { authenticated: false };
  }

  componentDidMount() {
    if (auth.loggedIn()) {
      /* eslint-disable */
      this.setState({ authenticated: true });
      /* eslint-enable */
    }
  }

  render() {
    return (
      <div className="header_nav_buttons col-md-6 col-sm-6 col-xs-12">
        {this.state.authenticated ?
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
          :
          <Link href="/login">
            <a>login</a>
          </Link>
        }

        <Link href="/register">
          <a className="submit_work">SUBMIT YOUR WORK</a>
        </Link>
      </div>
    );
  }

}

export default HeaderLogin;
