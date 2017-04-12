import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { map, size } from 'lodash';
import { nextConnect } from '../store';
import { FETCH_EVENTS } from '../actions/types';
import HeaderSocial from '../components/HeaderSocial';
import HeaderNav from '../components/HeaderNav';
import HeaderLogin from '../components/HeaderLogin';
import BottomMenu from '../components/Home/BottomMenu';
import BottomLatestNews from '../components/Home/BottomLatestNews';
import Footer from '../components/Footer';
import ShowCity from '../components/Shows';
import { BASE_URL } from '../actions';


class Shows extends Component {
  static async getInitialProps({ req, store }) {
    if (req) {
      const response = await axios.get(`${BASE_URL}/events`);
      store.dispatch({
        type: FETCH_EVENTS,
        payload: response.data.events,
      });

      const shows = response.data.events;

      return { shows };
    }
    return {};
  }


  constructor(props) {
    super(props);
    this.state = { address: {} };
  }


  componentDidMount() {
    const anyShows = size(this.props.shows);
    if (anyShows === 0) {
      this.getData();
    }
  }

  async getData() {
    const response = await axios.get(`${BASE_URL}/events`);
    this.setState({ shows: response.data.events });
  }


  render() {
    const shows = this.props.shows || this.state.shows;
    return (
      <div>
        <Head>
          <title>Shows - Conception Arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src="/static/js/zen.js"></script>
        </Head>
        <header className="page_header portfolio_header clearfix">
          <div className="container">
            <div className="row">
              <div className="logo col-lg-6 col-md-5 col-sm-4 col-xs-12">
                <Link prefetch href="/">
                  <a><img src="/static/img/logo_white.png" alt="" /></a>
                </Link>
              </div>
              <div className="header_nav col-lg-6 col-md-7 col-sm-8 col-xs-12">
                <div className="row">
                  <HeaderLogin />
                  <HeaderNav />
                  <HeaderSocial />
                </div>
              </div>
            </div>
            <div className="page_title artist_page_title">
              <div className="artist_page_top_title">
                SHOWS
              </div>
              <div>
                Shows Coming Up
              </div>
            </div>
          </div>
          {/* <div className="buy_ticket_button">
            <a href="">
              BUY TICKETS
            </a>
          </div> */}
        </header>

        <main className="main_block_page portfolio_page">
          <div className="cities_buy_tickets">
            <div className="container">

              {shows && map(shows, (show) => (
                <ShowCity {...show} key={show.id} />
              ))}


            </div>
          </div>
          <BottomLatestNews />
          <BottomMenu />
        </main>
        <Footer />
      </div>
    );
  }
}

Shows.propTypes = {
  shows: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    shows: state.events,
  };
}

/**
 * Connect to Redux store.
 */
export default nextConnect(mapStateToProps, null)(Shows);
