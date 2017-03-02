import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { getEvents } from '../actions';
import { FETCH_EVENTS } from '../actions/types';
import { nextConnect } from '../store';

import Footer from '../components/Footer';
import BottomMenu from '../components/Home/BottomMenu';
import BottomLatestNews from '../components/Home/BottomLatestNews';
import FeaturedOn from '../components/Home/FeaturedOn';
import Testimonials from '../components/Home/Testimonials';
import EventCities from '../components/Home/EventCities';
import WhatsNew from '../components/Home/WhatsNew';
import ArtistsCollector from '../components/Home/ArtistsCollector';
import BringArt from '../components/Home/BringArt';
import HeaderSocial from '../components/HeaderSocial';
import HeaderNav from '../components/HeaderNav';
import HeaderLogin from '../components/HeaderLogin';

class Home extends Component {

  static getInitialProps({ store }) {
    const response = ('/api/events');

    console.log(response);

    // response.then((data) => {
    //   console.log(data);
    // })
    // .catch(err => console.log('cant get data', err));

    // store.dispatch({
    //   type: FETCH_EVENTS,
    //   payload: response.data.events,
    // });

    return {};
  }

  constructor(props) {
    super(props);
    this.state = { events: [], name: 'Parker' };
  }

  // componentWillMount() {
  //   this.props.getEvents();
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { events } = nextProps;
  //   this.setState({ events });
  // }

  render() {
    return (
      <div>
        <Head>
          <title>Conception arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className="page_header portfolio_header index_header">
          <div className="container">
            <div className="row">
              <div className="logo col-lg-6 col-md-5 col-sm-4 col-xs-12">
                <Link href="/">
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
            <div className="page_title artist_page_title index_page_artist">
              <div className="art_for">
                Art for art’s sake.
                <Link href="/collector"><a>COLLECTOR</a></Link>
                <Link href="/artist-general"><a>ARTIST</a></Link>
              </div>
              <div>
                We are that art that you want to know more about art.
              </div>
              <div className="index_page_artist_scroll">
                Scroll down to learn more
              </div>
            </div>

            <div className="clearfix">
              <div className="submit_index_page_wrap">
                <div className="submit_index_page col-md-6 col-sm-6 col-xs-12">
                  <Link href="/register">
                    <a>SUBMIT YOUR WORK</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="main_block_page about_page">
          <BringArt />
          <ArtistsCollector />
          <div className="more_of_wats_new">
            <div className="container">
              <div className="submit_index_page_wrap">
                <div className="more_whats_new col-md-7 col-sm-7 col-xs-12">
                  <Link href="/whats-new">
                    <a>More of What’s New</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <WhatsNew />
          <EventCities {...this.state.events} />
          <div className="view_more_shows clearfix">
            <div className="submit_index_page col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <Link href="/shows">
                <a>View More Shows</a>
              </Link>
            </div>
          </div>
          <Testimonials />
          <FeaturedOn />
          <BottomLatestNews />
          <BottomMenu />
        </main>
        <Footer />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

/**
 * Connect to Redux store.
 */
export default nextConnect(mapStateToProps, { getEvents })(Home);
