// HOC for protected pages
import React, { Component } from 'react';
import Router from 'next/router';
import AuthService from './auth-service';

export default function withAuth(AuthComponent) {
  const Auth = new AuthService();
  return class Authenticated extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      if (!Auth.loggedIn()) {
        Router.replace('/login');
      }
      /*eslint-disable */
      this.setState({ isLoading: false });
      /*eslint-enable */
    }

    render() {
      return (
        <div>
          {this.state.isLoading ?
            <div className="processing">LOADING....</div> :
            <AuthComponent {...this.props} auth={Auth} />
          }
        </div>
      );
    }
    };
}
