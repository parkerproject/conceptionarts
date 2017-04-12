import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import Router from 'next/router';
import Modal from 'react-modal';
import moment from 'moment';
import { size, filter, indexOf, map } from 'lodash';
import { nextConnect } from '../store';
import HeaderSocial from '../components/HeaderSocial';
import HeaderNav from '../components/HeaderNav';
import HeaderLogin from '../components/HeaderLogin';
import Footer from '../components/Footer';
import { BASE_URL, IMAGE_URL } from '../actions';
import { buildUrl } from '../helpers';

const THUMBNAIL_URL = `https://res.cloudinary.com/conceptionarts/image/fetch/w_248,h_200,c_fill/${IMAGE_URL}`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    lineHeight: '2',
    fontSize: '13px',
    border: '2px solid #e83796',
    padding: '20px',
  },
};

class Artist extends Component {
  static async getInitialProps({ query: { user_token } }) {
    // req.params.user_token
    if (user_token) {
      const response = await axios.get(`${BASE_URL}/artist/${user_token}`);
      return { artist: response.data[0] };
    }
    return {};
  }

  constructor(props) {
    super(props);
    this.state = { artist: null, artistEvents: null, modalIsOpen: false, process: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.prepareData();
  }

  onSubmit(url, user) {
    this.setState({ checkedEvent: url, process: true });
    const href = buildUrl(url, user);
    location.href = href;
  }

  async prepareData() {
    let liveEvents = this.props.shows;
    const anyEvents = size(liveEvents);

    if (!this.props.artist) {
      let userToken = decodeURI(Router.router.as);
      userToken = userToken.split('/')[2];
      const response = await axios.get(`${BASE_URL}/artist/${userToken}`);
      this.setState({ artist: response.data[0] });
    }
    if (anyEvents === 0) {
      const events = await axios.get(`${BASE_URL}/events`);
      liveEvents = events.data.events;
    }

    const artist = this.props.artist || this.state.artist;
    const artistEvents = filter(liveEvents, (event) =>
    indexOf(artist.events, Number(event.id)) !== -1);
    this.setState({ artistEvents });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }


  render() {
    const artist = this.props.artist || this.state.artist;
    return (
      <div>
        <Head>
          <title>Artist - Conception arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
        </Head>
        <header className="page_header portfolio_header">
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
            <div className="back ion-android-arrow-back" onClick={() => window.history.back()}> Back to Show</div>
            <div className="page_title artist_page_title">
              <div>
                Artist
              </div>
            </div>
          </div>
        </header>

        <main className="main_block_page portfolio_page">
          <div className="container">
            <div className="heading_block">
              <div className="row">
                <div className="page_block_title col-md-8 col-sm-12">
                  {artist.full_name}
                </div>
                <div className="logout col-md-4 col-sm-12">
                  <a href="#" onClick={() => this.openModal()}>
                    BUY TICKETS
                  </a>
                </div>
              </div>
            </div>
            <div className="artist_content">
              <div className="row">
                <div className="artist_content_photo col-md-4 col-sm-4 col-xs-12">
                  <div className="artist_content_photo_inner">
                    <div className="artist_content_photo_inner_displayed">
                      <img src={`${IMAGE_URL}/${artist.photo}`} alt="" />
                    </div>
                  </div>
                </div>
                <div className="artist_content_top_text col-md-8 col-sm-8 col-xs-12">
                  <div className="artist_content_top_text_title">
                    {artist.genre}
                  </div>
                  {/* <div className="artist_content_top_text_city">
                    <span>Dallas</span><span>TX</span>
                  </div> */}
                  <div className="artist_content_top_text_description">{artist.story}</div>
                </div>
              </div>
              <div className="share_links">
                {artist.facebook_url !== '' &&
                  <div className="share_links_item">
                    <a href="">
                      <span className="facebook">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </span>on Facebook
                    </a>
                  </div>
                }
                {artist.twitter_url !== '' &&
                  <div className="share_links_item">
                    <a href="">
                      <span className="twitter">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </span>on Twitter
                    </a>
                  </div>
                }

                {artist.instagram !== '' &&
                  <div className="share_links_item">
                    <a href="">
                      <span className="pinterest">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </span>on Instagram
                    </a>
                  </div>
                }

              </div>
              <div className="artist_photoes">
                {artist.artwork_1 &&
                  <div className="artist_photoe_item col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="artist_photoe_item_inner">
                      <img src={`${THUMBNAIL_URL}/${artist.artwork_1}`} alt="" />
                    </div>
                  </div>
                }
                {artist.artwork_2 &&
                  <div className="artist_photoe_item col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="artist_photoe_item_inner">
                      <img src={`${THUMBNAIL_URL}/${artist.artwork_2}`} alt="" />
                    </div>
                  </div>
                }
                {artist.artwork_3 &&
                  <div className="artist_photoe_item col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="artist_photoe_item_inner">
                      <img src={`${THUMBNAIL_URL}/${artist.artwork_3}`} alt="" />
                    </div>
                  </div>
                }

                {artist.gallery && map(artist.gallery, (file) => (
                  <div className="artist_photoe_item col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="artist_photoe_item_inner">
                      <img src={`${THUMBNAIL_URL}/${file}`} alt="" />
                    </div>
                  </div>
                  ))}

              </div>
            </div>
          </div>
          {/* {this.state.modal && <div></div>} */}
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          > {this.state.process && <span className="proceed">Proceeding to Eventbrite...</span>}
            <h3 className="normal-height">Select Show</h3>
            <hr />

            {map(this.state.artistEvents, (event) => (
              <p className="modalLabel" key={event.id}>
                <input
                  type="radio"
                  value={this.state.checkedEvent}
                  checked={this.state.checkedEvent === event.url}
                  onChange={() => this.onSubmit(event.url, artist.user_token)}
                />
                <label>{event.name.text} - {moment(event.start.local).format('MMMM Do YYYY')}
                </label>
              </p>
            ))}
          </Modal>

        </main>
        <Footer />
      </div>
    );
  }
}

Artist.propTypes = {
  artist: React.PropTypes.object,
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
export default nextConnect(mapStateToProps, null)(Artist);
