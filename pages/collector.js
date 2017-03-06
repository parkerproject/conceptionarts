import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Footer from '../components/Footer';
import BottomMenu from '../components/Home/BottomMenu';
import BottomLatestNews from '../components/Home/BottomLatestNews';

class Collector extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Collector - Conception Arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className="page_header portfolio_header">
          <div className="container">
            <div className="row">
              <div className="logo col-sm-6 col-xs-12">
                <Link href="index"><a>
                  <img src="/static/img/logo_white.png" alt="" />
                </a></Link>
              </div>
            </div>
            <div className="collector_header">
              <div className="row">
                <div className="collector_image col-xl-8 col-lg-8 col-md-12 col-sm-12">
                  <img src="/static/img/collector.jpg" alt="" />
                </div>
                <div className="collector_text col-xl-4 col-lg-4 col-md-12 col-sm-12">
                  <div className="collector_text_title">
                    <div className="big_title">
                      Collector
                    </div>
                  </div>
                  <div className="collector_text_title_text">
                    Conception is proud to present curated exhibits of local art in multiple cities
                    throughout the U.S. and Europe.
                  </div>
                  <div className="discover_art">
                    <a href="">
                      Discover art that inspires you
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="main_block_page about_page">
          <div className="collector_page_text">
            <div className="container">
              <div className="small_title">
                CONCEPTION TESTIMONIALS
              </div>
              <div className="collector_page_text_title">
                Art as an Investment…
              </div>
              <div className="collector_page_text_text">
                <p>
                  Our pioneering platform is rapidly changing the landscape of the art
                  industry by eliminating galleries completely from the selling environment
                  in favor of a new model that pairs artists directly with collectors.
                  Tradition has its place, but so does progression and revolution.
                </p>
                <p>
                  By eliminating galleries, we eliminate commission, a premium charge of
                  up to 60% added to artists work by galleries around the globe for decades.
                  Saving you money on your investment and allowing artists to price their
                  work fairly and within market range.
                </p>
                <p>
                  We consider our artists to be at the “tipping point” of their careers
                  and are proud to introduce and present their work directly to you, the collector.
                </p>
              </div>
            </div>
          </div>

          <div className="category_filter">
            <div className="container">
              <div className="block_small_title">
                Click on a category to filter the features.
              </div>
              <div className="category_filter_head">
                <div className="category_filter_head_item">
                  Locations
                </div>
                <div className="category_filter_head_item">
                  Medium
                </div>
                <div className="category_filter_head_item">
                  For Sale
                </div>
              </div>
            </div>
          </div>

          <div className="tabs">
            <div className="container">
              <div className="portfolio_items clearfix">
                <div className="row row-eq-height">
                  <div className="portfolio_item col-lg-3 col-md-6 col-xs-12">
                    <div className="portfolio_item_inner">
                      <div className="portfolio_item_content">
                        <div className="portfolio_item_inner_image">

                        </div>

                        <div className="portfolio_item_inner_title">
                          <div className="portfolio_item_inner_title_title">
                            Eddie Smith
                          </div>
                          <div className="portfolio_item_inner_title_street">
                            Los Angeles,
                          </div>
                          <div className="portfolio_item_inner_title_place">
                            CA 12 current works, 3 for sale
                          </div>
                        </div>

                        <div className="portfolio_item_inner_link">
                          <a href="">
                            FOLLOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="portfolio_item col-lg-3 col-md-6 col-xs-12">
                    <div className="portfolio_item_inner">
                      <div className="portfolio_item_content">
                        <div className="portfolio_item_inner_image">

                        </div>

                        <div className="portfolio_item_inner_title">
                          <div className="portfolio_item_inner_title_title">
                            Eddie Smith
                          </div>
                          <div className="portfolio_item_inner_title_street">
                            Los Angeles,
                          </div>
                          <div className="portfolio_item_inner_title_place">
                            CA 12 current works, 3 for sale
                          </div>
                        </div>

                        <div className="portfolio_item_inner_link">
                          <a href="">
                            FOLLOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="portfolio_item col-lg-3 col-md-6 col-xs-12">
                    <div className="portfolio_item_inner">
                      <div className="portfolio_item_content">
                        <div className="portfolio_item_inner_image">

                        </div>

                        <div className="portfolio_item_inner_title">
                          <div className="portfolio_item_inner_title_title">
                            Eddie Smith
                          </div>
                          <div className="portfolio_item_inner_title_street">
                            Los Angeles,
                          </div>
                          <div className="portfolio_item_inner_title_place">
                            CA 12 current works, 3 for sale
                          </div>
                        </div>

                        <div className="portfolio_item_inner_link">
                          <a href="">
                            FOLLOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="portfolio_item col-lg-3 col-md-6 col-xs-12">
                    <div className="portfolio_item_inner">
                      <div className="portfolio_item_content">
                        <div className="portfolio_item_inner_image">

                        </div>

                        <div className="portfolio_item_inner_title">
                          <div className="portfolio_item_inner_title_title">
                            Eddie Smith
                          </div>
                          <div className="portfolio_item_inner_title_street">
                            Los Angeles,
                          </div>
                          <div className="portfolio_item_inner_title_place">
                            CA 12 current works, 3 for sale
                          </div>
                        </div>

                        <div className="portfolio_item_inner_link">
                          <a href="">
                            FOLLOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="see_all_artist_button">
                <div className="category_filter_head_item">
                  <a href="">
                    See All Artists
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="upcoming_show">
            <div className="container">
              <div className="block_small_title">
                Check out our roster of upcoming exhibits
              </div>
              <div className="upcoming_show_block_pink">
                UPCOMING SHOWS
              </div>
              <div className="upcoming_show_block">
                <div className="big_title">
                  No Commission
                </div>
                <div className="medium_title">
                  Purchase artwork directly from the artist, no commision
                </div>
              </div>
              <div className="upcoming_show_text">
                Strengthening the Local Community - A Civic Economics study in Grand Rapids,
                Michigan, recently found that when people buy art from local entrepreneurs,
                including artists, a significant share of their money remains in the community,
                thereby supporting its economic base. Roughly $68 of every $100 spent at a
                local business stays in the local economy.
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

export default Collector;
