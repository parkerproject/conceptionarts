import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Footer from '../components/Footer';
import BottomMenu from '../components/Home/BottomMenu';
import BottomLatestNews from '../components/Home/BottomLatestNews';
import HeaderSocial from '../components/HeaderSocial';
import HeaderNav from '../components/HeaderNav';
import HeaderLogin from '../components/HeaderLogin';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

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
                <ScrollLink
                  to="submission"
                  spy
                  smooth
                  duration={500}
                  className="scroll_link"
                >
                  Submission
                </ScrollLink>
                <ScrollLink
                  to="production"
                  spy
                  smooth
                  duration={500}
                  className="scroll_link"
                >
                  Production
                </ScrollLink>
                <ScrollLink
                  to="event"
                  spy
                  smooth
                  duration={500}
                  className="scroll_link"
                >
                  Event
                </ScrollLink>
                <ScrollLink
                  to="refund"
                  spy
                  smooth
                  duration={500}
                  className="scroll_link"
                >
                  Refund Policy
                </ScrollLink>
              </div>
            </div>
          </div>
        </header>

        <main className="main_block_page about_page">
          <div className="faq_block">
            <div className="container">
              <div className="faq_block_tilte">
                <div className="big_title">
                  <Element name="submission">
                    Submission
                  </Element>
                </div>
              </div>
              <div className="faq_block_item">
                <div className="faq_block_ask">
                  How can I participate in a Conception Art Show?
                </div>
                <div className="faq_block_answer">
                  You may submit your work via <a href="https://www.conceptionarts.com/register" style={{ textDecoration: 'underline' }}>
                    https://www.conceptionarts.com/register
                  </a>
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  What type of work does Conception consider?
                </div>
                <div className="faq_block_answer">
                  Work must be original. We consider submissions from the following mediums -
                  painting, drawing, mixed media, photography, sculpture and other maker-designed goods.
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  What should I include in my submission?
                </div>
                <div className="faq_block_answer">
                  Include examples of work your best work. While images do not need to be high resolution,
                  please be sure they are clear.
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
                  If accepted, is there a fee to participate / do you take commission?
                </div>
                <div className="faq_block_answer">
                  Exhibitor space is $300 or, alternatively, you can fund your space via selling
                  15 tickets (digital via our website) to the exhibit. Conception does not
                  take any commission, you keep 100% of your sales.
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  What is included with my participation fee?
                </div>
                <div className="faq_block_answer">
                  Exhibitor Space<br />
                  Lighting (1 clamp light for duration of event)<br />
                  Certificate of Participation<br />
                  Consideration for ‘Award of Excellence’<br />
                  Portfolio profile on www.conceptionarts.com<br />
                  Social Media Promotion to over 40,000 followers worldwide<br />
                  Inclusion in Press/Media promotion material<br />
                  Searchable Exhibitor Profile on our website / Collector database
                </div>
              </div>
            </div>
          </div>

          <div className="faq_block">
            <div className="container">
              <div className="faq_block_tilte">
                <div className="big_title">
                  <Element name="production">
                    Production
                  </Element>
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  How will I display my work?
                </div>
                <div className="faq_block_answer">
                  We provide you with a (minimum of) 4 x 5 ft of space for you to install your work upon. For 2D work, you will hang on a freestanding gridwall or chain link panel.

                </div>
              </div>
              <div className="faq_block_item">
                <div className="faq_block_ask">
                  When do I install?
                </div>
                <div className="faq_block_answer">
                  On the day of show around 2pm
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  Am I responsible for installing?
                </div>
                <div className="faq_block_answer">
                  Yes, artists, or a representative of the artist must install own show.
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
                  Between 40 to 50 artists depending on location
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  When do I take down my work?
                </div>
                <div className="faq_block_answer">
                  At the end of the evening (10pm)
                </div>
              </div>
            </div>
          </div>

          <div className="faq_block">
            <div className="container">
              <div className="faq_block_tilte">
                <div className="big_title">
                  <Element name="event">
                    Event
                  </Element>
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  How many people will attend the event?
                </div>
                <div className="faq_block_answer">
                  We estimate an attendance minimum of 400 people
                </div>
              </div>
              <div className="faq_block_item">
                <div className="faq_block_ask">
                  Who will attend?
                </div>
                <div className="faq_block_answer">
                  In addition to guests invited by our artists,
                  Conception invite local galleries, business professionals and local media.
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  Can I sell my work at a Conception show?
                </div>
                <div className="faq_block_answer">
                  Yes. We encourage you to sell your work
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  How do I take credit cards?
                </div>
                <div className="faq_block_answer">
                  Since Conception does not handle sales, if you wish to take credit card payments
                  you must prepare ahead of time by obtaining a ‘square’ device or similar.
                </div>
              </div>

              <div className="faq_block_item">
                <div className="faq_block_ask">
                  Is there an age limit to attend event?
                </div>
                <div className="faq_block_answer">
                  Dependent on venue policy
                </div>
              </div>

            </div>
          </div>

          <div className="faq_block">
            <div className="container">
              <div className="faq_block_tilte">
                <div className="big_title">
                  <Element name="refund">
                    REIMBURSEMENT POLICY
                  </Element>
                </div>
              </div>

              <div className="faq_block_item last-faq">
                <div className="faq_block_ask">
                  Tickets to a Conception event are non-refundable, with the following exceptions only:
                </div>
                <div className="faq_block_answer">
                  i) Cancellation of Event - In the unlikely event that an exhibit is canceled,
                  Conception will refund the full price of any tickets purchased.
                </div>
                <div className="faq_block_answer">
                  ii) Reschedule of Event - In the unlikely event that an exhibit needs to be rescheduled,
                  our team will contact you. If you are unable to participate on the rescheduled date,
                  Conception will offer a refund or, a transfer to a future or alternative city exhibit.
                </div>
                <div className="faq_block_answer">
                  iii) Artist no longer participating - If you purchased a ticket to support
                  an artist that is no longer participating, Conception will offer a refund.
                </div>
                <div className="faq_block_answer">
                  iv) Other: No other refunds will be offered, except in extreme circumstances.
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
