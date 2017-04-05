import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { filter, map } from 'lodash';
import Router from 'next/router';
import moment from 'moment';
import { nextConnect } from '../store';
import { FETCH_EVENTS } from '../actions/types';
import { getVenue, getArtists, BASE_URL } from '../actions';
import HeaderSocial from '../components/HeaderSocial';
import HeaderNav from '../components/HeaderNav';
import HeaderLogin from '../components/HeaderLogin';
import BottomMenu from '../components/Home/BottomMenu';
import BottomLatestNews from '../components/Home/BottomLatestNews';
import Footer from '../components/Footer';

const PHOTO_URL = 'http://res.cloudinary.com/conceptionarts/image/fetch/w_233,h_230,c_fill/https://artistworks.s3-us-west-2.amazonaws.com/artists_images';

class Show extends Component {
  static async getInitialProps({ req, store }) {
    if (req) {
      const response = await axios.get(`${BASE_URL}/events`);
      store.dispatch({
        type: FETCH_EVENTS,
        payload: response.data.events,
      });
      const show = filter(response.data.events, (event) => event.id === req.params.id);

      return { show };
    }
    return {};
  }


  constructor(props) {
    super(props);
    this.state = { show: null, address: {}, artists: [] };
  }

  componentWillMount() {
    if (!this.props.show) {
      let id = decodeURI(Router.router.as);
      id = id.split('/')[2];
      const show = filter(this.props.events, (event) => event.id === id);
      this.setState({ show });
    }
  }

  componentDidMount() {
    const show = this.state.show || this.props.show;
    getVenue(show[0].venue_id, (address) => {
      this.setState({ address });
    });

    getArtists(show[0].id, (artists) => {
      this.setState({ artists });
    });
  }


  render() {
    const show = this.state.show || this.props.show;

    return (
      <div>
        <Head>
          <title>Shows - Conception arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className="page_header portfolio_header show_header">
          <div className="container">
            <div className="row">
              <div className="logo col-lg-6 col-md-5 col-sm-4 col-xs-12">
                <Link prefetch href="/index">
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
                Check out these city shows
              </div>
            </div>
          </div>
        </header>

        <main className="main_block_page about_page">
          <div className="shows_city_detalis">
            <div className="container">
              <div className="row">
                <div className="row-eq-height block_eq">
                  <div className="shows_city_detalis_title col-xl-7 col-lg-7 col-md-6 col-sm-12">
                    <div className="shows_city_detalis_title_title">
                      {show[0].name.text}
                    </div>
                    <div className="shows_city_detalis_title_date">
                      {moment(show[0].start.local).format('MMMM Do YYYY')} -
                      {this.state.address.address && this.state.address.address.address_1}
                    </div>
                    <div className="shows_city_detalis_title_time">
                      {moment(show[0].start.local).format('h:mm a')} -
                      {moment(show[0].end.local).format('h:mm a')} | {this.state.address.name}
                    </div>
                  </div>
                  <div className="shows_city_detalis_image col-xl-5 col-lg-5 col-md-6 col-sm-12">
                    <img src={show[0].logo.original.url} alt="" />
                  </div>
                </div>
              </div>
              <div className="shows_city_detalis_text_only">{show[0].description.text}</div>
            </div>
          </div>

          <div className="purchache_tickets">
            <div className="container">
              <div className="purchache_tickets_title">
                Purchase Tickets
              </div>
              <div className="purchache_tickets_sub_title">
                Please support our artists by clicking on their Profile to Purchase a ticket
              </div>
              <div className="purchase_without">
                To purchase without an artist please click <a href="">here</a>
              </div>
              <div className="select_and_buy_tickets">
                <div className="row">
                  <div className="select_and_buy_tickets_select col-md-7 col-xs-12">
                    <select name="" id="">
                      <option value="">SELECT AN ARTIST ...</option>
                      <option value="">SELECT AN ARTIST ...</option>
                      <option value="">SELECT AN ARTIST ...</option>
                    </select>
                  </div>
                  <div className="select_and_buy_tickets_button col-md-5 col-xs-12">
                    <input type="submit" value="BUY TICKETS" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shows_artists">
            <div className="container">
              <div className="portfolio_items clearfix">
                <div className="row row-eq-height block_eq">
                  {map(this.state.artists, (artist) => (
                    <div className="portfolio_item col-lg-3 col-md-6 col-xs-12" key={artist.user_token}>
                      <div className="portfolio_item_inner">
                        <div className="portfolio_item_content">
                          <div className="portfolio_item_inner_image">
                            <Link
                              prefetch
                              href="/artist"
                              as={`/artist/${artist.user_token}`}
                            ><a><img src={`${PHOTO_URL}/${artist.photo}`} alt="" /></a>
                            </Link>
                          </div>

                          <div className="portfolio_item_inner_title">
                            <div className="portfolio_item_inner_title_shows_title">
                              {artist.full_name}
                            </div>
                            <div className="portfolio_item_inner_title_shows_category">
                              {artist.genre}
                            </div>
                          </div>

                          <div className="portfolio_item_inner_link">
                            <Link
                              prefetch
                              href="/artist"
                              as={`/artist/${artist.user_token}`}
                            >
                              <a>
                                view
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

Show.propTypes = {
  show: React.PropTypes.array,
  events: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

/**
 * Connect to Redux store.
 */
export default nextConnect(mapStateToProps, null)(Show);
