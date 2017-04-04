import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Footer from '../components/Footer';
import BottomMenu from '../components/Home/BottomMenu';
import BottomLatestNews from '../components/Home/BottomLatestNews';
import HeaderSocial from '../components/HeaderSocial';
import HeaderNav from '../components/HeaderNav';
import HeaderLogin from '../components/HeaderLogin';

class Contact extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Contact - Conception Arts</title>
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
              <div>
                Contact Us
              </div>

            </div>
          </div>
        </header>

        <main className="main_block_page about_page">
          <div className="faq_block">
            <div className="container">
              <div className="faq_block_item">
                <div className="stay_in_touch_item_title">
                  302 E. West St. New York, NY 59699
                </div>

              </div>
            </div>
          </div>
          <BottomMenu />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Contact;
