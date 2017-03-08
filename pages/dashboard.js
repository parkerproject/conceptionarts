import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { nextConnect } from '../store';
import Portfolio from '../components/Dashboard/Portfolio';
import Profile from '../components/Dashboard/Profile';
import Tracker from '../components/Dashboard/Tracker';
import Events from '../components/Dashboard/Events';
import requireAuth from '../components/Auth/require-auth';
import Footer from '../components/Footer';
import { getProfile } from '../actions';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { active: false, page: Profile, profile: {} };
    // current-menu-item
  }

  componentDidMount() {
    this.props.getProfile();
  }

  componentWillReceiveProps(nextProps) {
    const { profile } = nextProps;
    this.setState({ profile });
  }

  screen(page) {
    const pageMapping = {
      Profile,
      Portfolio,
      Tracker,
      Events,
    };
    this.setState({ page: pageMapping[page] });
  }

  render() {
    const View = this.state.page;

    return (
      <div>
        <Head>
          <title>Artist Dashboard - Conception Arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className="page_header portfolio_header">
          <div className="container">
            <div className="row">
              <div className="logo col-sm-6 col-xs-12">
                <Link href="/index">
                  <a><img src="/static/img/logo_white.png" alt="" /></a>
                </Link>
              </div>
              <div className="logout col-sm-6 col-xs-12">
                <a href="">
                  Logout
                </a>
              </div>
            </div>
            <div className="page_title">
              Welcome Beca
            </div>
            <div className="main_menu">
              <ul>
                <li><a onClick={() => this.screen('Profile')}>PROFILE</a></li>
                <li><a onClick={() => this.screen('Portfolio')}>PORTFOLIO</a></li>
                <li><a onClick={() => this.screen('Tracker')}>TICKET TRACKER</a></li>
                <li><a onClick={() => this.screen('Events')}>Events</a></li>
              </ul>
            </div>
          </div>
        </header>
        <View {...this.state.profile} />
        <Footer />
      </div>
    );
  }
}


Dashboard.propTypes = {
  events: React.PropTypes.object,
  getProfile: React.PropTypes.func,
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
export default nextConnect(mapStateToProps, { getProfile })(requireAuth(Dashboard));
