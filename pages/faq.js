import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Footer from '../components/Footer';
import BottomMenu from '../components/Home/BottomMenu';
import BottomLatestNews from '../components/Home/BottomLatestNews';
import HeaderSocial from '../components/HeaderSocial';
import HeaderNav from '../components/HeaderNav';
import HeaderLogin from '../components/HeaderLogin';

class Faq extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>FAQ - Conception Arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className="page_header portfolio_header">
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
            <div className="page_title artist_page_title">
              <div className="artist_page_top_title">
                ABOUT US
              </div>
              <div>
                Frequently Asked Questions
              </div>
              <div className="artist_page_top_links">
                <a href="">
                  Submission
                </a>
                <a href="">
                  Production
                </a>
                <a href="">
                  Event
                </a>
                <a href="">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="main_block_page about_page">
          <div className="faq_block">
            <div className="container">
              <div className="faq_block_tilte">
                <div className="big_title">
                  Submission
                </div>
              </div>
              <div className="faq_block_item">
                <div className="faq_block_ask">
                  How can I participate in a Conception Art Show?
                </div>
                <div className="faq_block_answer">
                  Artists may submit work via conceptionarts.com/submit
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  What type of work does Conception consider?
                </div>
                <div className="faq_block_answer">
                  Work must be original. We consider submissions from the following mediums - painting, drawing, mixed media, photography, sculpture and other maker-designed goods.
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  What should I include in my submission?
                </div>
                <div className="faq_block_answer">
                  Include examples of your best work. While images do not need to be high resolution, please be sure they are clear.
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  How will I know if my work has been accepted for a Conception show?
                </div>
                <div className="faq_block_answer">
                  A member of our team will be in contact with you.
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  What is included with my participation fee?
                </div>
                <div className="faq_block_answer">
                  Minimum of 5ft x 4ft Exhibitor Space Lighting (1 clamp light for duration of event) Certificate of Participation Consideration for ‘Award of Excellence’ Social Media Promotion to over 40,000 followers worldwide Searchable Exhibitor Profile on our website / Collector database
                </div>
              </div>
            </div>
          </div>

          <div className="faq_block">
            <div className="container">
              <div className="faq_block_tilte">
                <div className="big_title">
                  Production
                </div>
              </div>
              <div className="faq_block_item">
                <div className="faq_block_ask">
                  How will I display my work?
                </div>
                <div className="faq_block_answer">
                  Artists are provided with a minimum of 4x5 ft of vertical space for them to install work. 2D work will be displayed on a freestanding gridwall or chainlink panel. For 3D work, accommodations will be made based on the size of the pieces
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  When do I install?
                </div>
                <div className="faq_block_answer">
                  On the day of show around 2pm.
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  Am I responsible for installing?
                </div>
                <div className="faq_block_answer">
                  Yes, artists, or a representative of the artist must install the work.
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  Do I show prints or originals?
                </div>
                <div className="faq_block_answer">
                  You can show either or a mix of both.
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  How many artists participate?
                </div>
                <div className="faq_block_answer">
                  Between 40 to 50 artists of varying mediums
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  When do I take down my work?
                </div>
                <div className="faq_block_answer">At the end of the event (10pm in most cities. Show times may vary slightly. Please check with your show director.)Between 40 to 50 artists of varying mediums
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

export default Faq;
