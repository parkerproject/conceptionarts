import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Modal from 'react-modal';
import { map } from 'lodash';
import Footer from '../components/Footer';
import BottomMenu from '../components/Home/BottomMenu';
import BottomLatestNews from '../components/Home/BottomLatestNews';
import HeaderSocial from '../components/HeaderSocial';
import HeaderNav from '../components/HeaderNav';
import HeaderLogin from '../components/HeaderLogin';
import team from '../static/team';

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

class About extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      modalContent: '',
      modalName: '',
      modalTitle: '',
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalName, modalContent, modalTitle) {
    this.setState({ modalIsOpen: true, modalName, modalContent, modalTitle });
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <Head>
          <title>About Us - Conception Arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src="/static/js/zen.js"></script>
        </Head>
        <header className="page_header portfolio_header">
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
                ABOUT US
              </div>
              <div>
                Exactly what is Conception?
              </div>
              <div className="artist_page_top_links">
                <a href="">
                  Our Platform
                </a>
                <a href="">
                  How It All Began
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="main_block_page about_page">
          <div className="attend_wrap clearfix">
            <div className="attend_wrap_link col-lg-6 col-md-8 col-xs-12">
              <Link prefetch href="/shows">
                <a>
                  ATTEND A SHOW
                </a>
              </Link>
            </div>
          </div>

          <div className="our_mission clearfix">
            <div className="container">
              <div className="row-eq-height responvive_flex">
                <div className="submit_work_about col-lg-4 col-md-4 col-xs-12">
                  <div className="submit_work_about_inner">
                    <div className="submit_work_about_inner_text">
                      We welcome submissions from artists/ musicians/ performers of ALL mediums.
                    </div>
                    <div className="submit_work_about_inner_button">
                      <Link prefetch href="/register">
                        <a>
                          SUBMIT WORK
                        </a>
                      </Link>

                    </div>
                  </div>
                </div>
                <div className="our_mission_text col-lg-8 col-md-8 col-xs-12">
                  <div className="our_mission_text_inner">
                    <div className="our_mission_text_title">
                      Our Mission
                    </div>
                    <div className="our_mission_text_text">
                      Conception is a global movement: one that is not just trying
                      to make a difference for each artist who participates,
                      but also for the community at large. Our mission is to
                      reshape and reenergize artistic communities around the world.
                      To inspire ideas and provide a greenhouse for creativity and
                      to nurture and mentor the creative groundbreakers of tomorrow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="map_block">
            <div className="map_block_title">
              Highlighted Cities
            </div>
            <div className="map_block_inner">
              <div className="map_block_inner_address">
                2049 Western St. Denver, CO 89699
              </div>
            </div>
          </div> */}

          <div className="our_platform clearfix">
            <div className="container">
              <div className="our_platform_title">
                Our Platform
              </div>
              <div className="our_platform_text">
                <p>
                  At Conception we work tirelessly to put you, the artist, in front of
                  those who value and appreciate art.
                  It is the cornerstone of our business as an arts-based company.
                  We take this mission very seriously and invest all of our energy into making
                  this promise a reality. We provide the full complement of tools and resources,
                  both intellectual and actual, to make certain that you succeed in your goals,
                  as they are our goals, too.
                </p>
                <p>
                  Exhibit – Our quarterly curated exhibits give you the opportunity to showcase
                  and sell your original artwork in person. Through encouragement, support and
                  community building, we  also strengthen your relationships
                  with your local galleries,
                  professionals and artistic peers.
                </p>
                <p>
                  Award – At each of our quarterly exhibits, our panel of industry experts vote
                  to award one artist with our prestigious  ‘Award for Excellence’
                  by considering the following: Originality, Craftsmanship and Presentation.
                </p>
                <p>
                  Online – We create an online presence for you and your work.
                  We provide you with a digital portfolio on our website where collectors and art
                  industry professionals can discover, share and learn more about your work.
                  We also promote your work via targetted digital marketing
                  and social media campaigns,
                  sharing your art with our 40,000+ worldwide followers.
                </p>
                <p>
                  As a Conception artist we want you to feel a part of a team, a family that
                  will nurture and guide you.  We look forward to welcoming you to our growing
                  community of artists from around the world.
                </p>
              </div>
            </div>
          </div>

          <div className="our_team">
            <div className="container">
              <div className="our_platform_title">
                Our Team
              </div>
              <div className="our_team_inner">
                <div className="portfolio_items clearfix">
                  <div className="row row-eq-height">
                    {map(team, (person, key) => (
                      <div className="portfolio_item col-lg-3 col-md-3 col-xs-12" key={key}>
                        <div className="portfolio_item_inner">
                          <div className="portfolio_item_content">
                            <div className="portfolio_item_inner_image" >
                              <img
                                onClick={() => this.openModal(person.name, person.bio, person.title)}
                                src={person.photo}
                                alt={person.name}
                              />
                            </div>

                            <div className="portfolio_item_inner_title">
                              <div
                                className="portfolio_item_inner_title_title"
                              >
                                {person.name}
                              </div>
                              {/* <div className="portfolio_item_inner_title_job">
                                PRESIDENT
                              </div> */}
                            </div>
                            <div className="portfolio_item_inner_link">
                              <a onClick={() => this.openModal(person.name, person.bio, person.title)}>
                                VIEW PROFILE
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="our_platform how_it_begen clearfix">
            <div className="container">
              <div className="our_platform_title">
                How It All Began
              </div>
              <div className="our_platform_text">
                <p>
                  Conception was founded in 2011 in New York City.
                  It was the concept of artists Rachel Wilkins and Mike Wolf.
                  As emerging artists themselves they began to experience the stumbling
                  blocks and lack of resources available to them that many artists come
                  up against starting out their careers
                </p>
                <p>
                  The duo set to work and began to create a multi-media exhibit and
                  nurturing community platform. Conception traces its roots back to
                  Tribeca, New York City, where its shows began welcoming hundreds of guests
                  to each exhibit and garnering great acclaim.
                </p>
                <p>
                  Conception has since exhibited the work of thousands of artists
                  throughout the U.S. and UK with plans to expand into Europe in 2017.
                </p>
              </div>
            </div>
          </div>

          <BottomLatestNews />
          <BottomMenu />
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          > <h3 className="normal-height">{this.state.modalName}</h3>
            <span><strong>{this.state.modalTitle}</strong></span>
            <p>{this.state.modalContent}</p>
          </Modal>
        </main>
        <Footer />
      </div>
    );
  }
}

export default About;
