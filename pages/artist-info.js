import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Footer from '../components/Footer';

class ArtistInfo extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>How We Serve You, The Artist - Conception Arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className="page_header artist_general_header">
          <div className="container">
            <div className="row">
              <div className="logo col-sm-6 col-xs-12">
                <Link href="/index">
                  <a>
                    <img src="/static/img/logo_white.png" alt="" />
                  </a></Link>
              </div>
            </div>
          </div>
        </header>

        <main className="main_block_page">
          <div className="artist_general_block">
            <div className="container">
              <div className="artist_general_block_image col-xl-5 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <img src="/static/img/mask.png" alt="" />
              </div>
              <div className="artist_general_block_text col-xl-7 col-lg-8 col-md-6 col-sm-12 col-xs-12">
                <div className="artist_general_block_text_title">
                  Artist
                </div>
                <div className="artist_general_block_text_inner">
                  <p>
                    At Conception we work tirelessly to put our artists in front of the people who collect art. It is the cornerstone of our construction as an arts-based entity. We take this mission seriously and invest the entirety of our energies to making this promise a reality.
                  </p>
                  <p>
                    We will provide the full complement of tools and resources, both intellectual and actual, to make certain that you succeed in your goals, as they are our goals, too. As a Conception artist you will be made to feel as though you are part of a team, a family that will nurture and guide. We look forward to helping you on your creative journey
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="artist_detalis_page_block">
            <div className="artist_detalis_page_block_inner">
              <div className="container">
                <div className="clearfix">
                  <div className="artist_detalis_page_block_inner_block col-lg-10 col-md-12">
                    <div className="the_artist">
                      THE ARTIST
                    </div>
                    <div className="first_title_artist">
                      The Nuts and Bolts of How We Serve You, The Artist
                    </div>
                    <div className="first_subtitle_artist">
                      Check out all we do for our artists below.
                    </div>
                    <div className="list_links_artist">
                      <ul>
                        <li><a href="">An opportunity to exhibit at one of our quarterly exhibits </a></li>
                        <li><a href="">An online profile on our growing artists platform </a></li>
                        <li><a href="">Your work shared with our community of over 40,000 art lovers worldwide</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="clearfix">
                  <div className="scene_title">
                    Markets We Serve
                  </div>
                  <div className="scene_items">
                    <div className="row">
                      <div className="scene_item col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="scene_item_inner">
                          <div className="scene_item_inner_image">
                            <img src="/static/img/scene.png" alt="" />
                          </div>
                          <div className="scene_item_inner_title_and_data">
                            <div className="row">
                              <div className="scene_item_inner_title col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                Los Angeles, CA
                              </div>
                              <div className="scene_item_inner_data col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                October 16, 2016
                              </div>
                            </div>
                          </div>
                          <div className="scene_item_inner_link">
                            <a href="">
                              SEE MORE DETAILS
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="scene_item col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="scene_item_inner">
                          <div className="scene_item_inner_image">
                            <img src="/static/img/scene.png" alt="" />
                          </div>
                          <div className="scene_item_inner_title_and_data">
                            <div className="row">
                              <div className="scene_item_inner_title col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                Los Angeles, CA
                              </div>
                              <div className="scene_item_inner_data col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                October 16, 2016
                              </div>
                            </div>
                          </div>
                          <div className="scene_item_inner_link">
                            <a href="">
                              SEE MORE DETAILS
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="scene_item col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="scene_item_inner">
                          <div className="scene_item_inner_image">
                            <img src="/static/img/scene.png" alt="" />
                          </div>
                          <div className="scene_item_inner_title_and_data">
                            <div className="row">
                              <div className="scene_item_inner_title col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                Los Angeles, CA
                              </div>
                              <div className="scene_item_inner_data col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                October 16, 2016
                              </div>
                            </div>
                          </div>
                          <div className="scene_item_inner_link">
                            <a href="">
                              SEE MORE DETAILS
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="scene_item col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="scene_item_inner">
                          <div className="scene_item_inner_image">
                            <img src="/static/img/scene.png" alt="" />
                          </div>
                          <div className="scene_item_inner_title_and_data">
                            <div className="row">
                              <div className="scene_item_inner_title col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                Los Angeles, CA
                              </div>
                              <div className="scene_item_inner_data col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                October 16, 2016
                              </div>
                            </div>
                          </div>
                          <div className="scene_item_inner_link">
                            <a href="">
                              SEE MORE DETAILS
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="scene_item col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="scene_item_inner">
                          <div className="scene_item_inner_image">
                            <img src="/static/img/scene.png" alt="" />
                          </div>
                          <div className="scene_item_inner_title_and_data">
                            <div className="row">
                              <div className="scene_item_inner_title col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                Los Angeles, CA
                              </div>
                              <div className="scene_item_inner_data col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                October 16, 2016
                              </div>
                            </div>
                          </div>
                          <div className="scene_item_inner_link">
                            <a href="">
                              SEE MORE DETAILS
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="scene_item col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="scene_item_inner">
                          <div className="scene_item_inner_image">
                            <img src="/static/img/scene.png" alt="" />
                          </div>
                          <div className="scene_item_inner_title_and_data">
                            <div className="row">
                              <div className="scene_item_inner_title col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                Los Angeles, CA
                              </div>
                              <div className="scene_item_inner_data col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                October 16, 2016
                              </div>
                            </div>
                          </div>
                          <div className="scene_item_inner_link">
                            <a href="">
                              SEE MORE DETAILS
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="see_all_button">
                    <a href="">
                      See All Shows
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testmonials_artist_general_page">
            <div className="container">
              <div className="clearfix">
                <div className="testmonials_artist_general_page_view_more col-xl-6 col-md-12 col-sm-12">
                  <div className="testmonials_artist_general_page_view_more_inner">
                    <a href="">
                      View More Testimonials
                    </a>
                  </div>
                  <div className="submit_work">
                    Submit your work and come take a look at our shows to see what you can be apart of!
                  </div>
                </div>
                <div className="testmonials_artist_general_page_testmonial col-xl-6 col-md-12 col-sm-12">
                  <div className="testmonials_artist_general_page_testmonial_inner">
                    <div className="testmonials_artist_general_page_testmonial_inner_bluetitle">
                      TESTIMONIAL
                    </div>
                    <div className="testmonials_artist_general_page_testmonial_inner_bluetitle_text">
                      "Conception is the most productive, organized, consistent -- and most importantly, artist-friendly team -- that I have had the pleasure of working with. They have figured out a non-traditional gallery model that is perfect both for helping build our careers as artists and providing an incredibly nurturing environment for our art. "
                    </div>
                    <div className="testmonial_autor">
                      - Artist, Ariel Shalit, New York City
                    </div>
                  </div>
                </div>
              </div>
              <div className="button_submit_work clearfix">
                <Link href="/register">
                  <a>
                    Submit Your Work
                  </a>
                </Link>

              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ArtistInfo;
