import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import { nextConnect } from '../store';
import Portfolio from '../components/Dashboard/Portfolio';
import Profile from '../components/Dashboard/Profile';
import Tracker from '../components/Dashboard/Tracker';
import Events from '../components/Dashboard/Events';
import requireAuth from '../components/Auth/require-auth';
import Footer from '../components/Footer';
import { getProfile, getEvents, authUser } from '../actions';
import AuthService from '../components/Auth/auth-service';

const auth = new AuthService();

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { active: false, page: 'Profile', profile: {} };
    this.logout = this.logout.bind(this);
    // current-menu-item
  }


  componentWillMount() {
    this.props.getProfile();
    this.props.getEvents();
  }

  componentWillReceiveProps(nextProps) {
    const { profile } = nextProps;
    this.setState({ profile });
  }

  screen(page) {
    this.setState({ page });
  }

  logout(e) {
    e.preventDefault();
    auth.logout();
    this.props.authUser(false);
    Router.push('/login');
  }

  render() {
    return (
      <div>
        <Head>
          <title>Artist Dashboard - Conception Arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
          <script src="https://widget.cloudinary.com/global/all.js"></script>
        </Head>
        <header className="page_header portfolio_header">
          <div className="container">
            <div className="row">
              <div className="logo col-sm-6 col-xs-12">
                <Link prefetch href="/index">
                  <a><img src="/static/img/logo_white.png" alt="" /></a>
                </Link>
              </div>
              <div className="logout col-sm-6 col-xs-12">

                <a onClick={this.logout} href="#">
                  Logout
                </a>

              </div>
            </div>
            <div className="page_title">
              Welcome {this.state.profile.full_name}
            </div>
            <div className="main_menu">
              <ul>
                <li className={this.state.page === 'Profile' && 'current-menu-item'}>
                  <a onClick={() => this.screen('Profile')}>PROFILE</a>
                </li>
                <li className={this.state.page === 'Portfolio' && 'current-menu-item'}>
                  <a onClick={() => this.screen('Portfolio')}>PORTFOLIO</a>
                </li>
                <li className={this.state.page === 'Tracker' && 'current-menu-item'}>
                  <a onClick={() => this.screen('Tracker')}>TICKET TRACKER</a>
                </li>
                <li className={this.state.page === 'Events' && 'current-menu-item'}>
                  <a onClick={() => this.screen('Events')}>Events</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {this.state.page === 'Profile' &&
          <Profile {...this.state.profile} />
        }
        {this.state.page === 'Portfolio' &&
          <Portfolio {...this.state.profile} />
        }
        {this.state.page === 'Tracker' &&
          <Tracker {...this.state.profile} data={this.props.events} />
        }
        {this.state.page === 'Events' &&
          <Events {...this.state.profile} />
        }

        <Footer />
      </div>
    );
  }
}


Dashboard.propTypes = {
  events: React.PropTypes.object,
  getProfile: React.PropTypes.func,
  getEvents: React.PropTypes.func,
  authUser: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    events: state.events,
    profile: state.profile,
  };
}

/**
 * Connect to Redux store.
 */
export default nextConnect(mapStateToProps,
  { getProfile, getEvents, authUser })(requireAuth(Dashboard));
