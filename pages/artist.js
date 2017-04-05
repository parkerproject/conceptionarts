import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import Router from 'next/router';
import HeaderSocial from '../components/HeaderSocial';
import HeaderNav from '../components/HeaderNav';
import HeaderLogin from '../components/HeaderLogin';
import Footer from '../components/Footer';
import { BASE_URL } from '../actions';

const PHOTO_URL = 'https://res.cloudinary.com/conceptionarts/image/fetch/w_328,h_200,c_fill/https://artistworks.s3-us-west-2.amazonaws.com/artists_images';
const THUMBNAIL_URL = 'https://res.cloudinary.com/conceptionarts/image/fetch/w_248,h_200,c_fill/https://artistworks.s3-us-west-2.amazonaws.com/artists_images';

class Artist extends Component {
  static async getInitialProps({ req }) {
    if (req && req.params) {
      const response = await axios.get(`${BASE_URL}/artist/${req.params.user_token}`);
      return { artist: response.data[0] };
    }
    return {};
  }

  constructor(props) {
    super(props);
    this.state = { artist: null };
  }

  async componentWillMount() {
    if (!this.props.artist) {
      let userToken = decodeURI(Router.router.as);
      userToken = userToken.split('/')[2];
      const response = await axios.get(`${BASE_URL}/artist/${userToken}`);
      this.setState({ artist: response.data[0] });
    }
  }

  render() {
    const artist = this.props.artist || this.state.artist;
    if (!artist) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <Head>
          <title>Artist - Conception arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
            <div className="page_title artist_page_title">
              <div>
                Artists
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
                  <a href="">
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
                      <img src={`${PHOTO_URL}/${artist.photo}`} alt="" />
                    </div>
                  </div>
                </div>
                <div className="artist_content_top_text col-md-8 col-sm-8 col-xs-12">
                  <div className="artist_content_top_text_title">
                    {artist.genre}
                  </div>
                  <div className="artist_content_top_text_city">
                    <span>Dallas</span><span>TX</span>
                  </div>
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


              </div>
            </div>
          </div>
          {this.state.modal && <div></div>}

        </main>
        <Footer />
      </div>
    );
  }
}

Artist.propTypes = {
  artist: React.PropTypes.object,
};

export default Artist;
