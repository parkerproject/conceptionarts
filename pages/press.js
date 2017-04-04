import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/Footer';
import BottomMenu from '../components/Home/BottomMenu';
import BottomLatestNews from '../components/Home/BottomLatestNews';
import HeaderSocial from '../components/HeaderSocial';
import HeaderNav from '../components/HeaderNav';
import HeaderLogin from '../components/HeaderLogin';

class Press extends Component {

  render() {
    return (
      <div>
        <Head>
          <title>Press - Conception arts</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className="page_header portfolio_header">
          <div className="container">
            <div className="row">
              <div className="logo col-lg-6 col-md-5 col-sm-4 col-xs-12">
                <a href="">
                  <img src="/static/img/logo_white.png" alt="" />
                </a>
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
                PRESS
              </div>
              <div>
                View our Press and Videos
              </div>
              {/* <div className="artist_page_top_links">
                <a href="">
                  View Videos
                </a>
                <a href="">
                  View Articles
                </a>
              </div> */}
            </div>
          </div>
        </header>

        <main className="main_block_page portfolio_page">
          <div className="preses">
            <div className="container">
              <div className="articles_and_videos_block clearfix">
                <div className="articles_and_videos_block_item article_block_pages">
                  <a href="http://www.huffingtonpost.com/laurie-nadel/rachel-wilkins-arts-crusa_b_14350350.html">
                    "When Words Fail, Art Speaks." - Co-Founder, Rachel Wilkins chats with the Huffington Post
                  </a>
                </div>

                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="http://www.bizjournals.com/newyork/news/2016/03/04/rachel-wilkins-blum-conception-events-influence.html">
                    Rachel Wilkins Blum, founder of Conception is a New York Business Journal “Woman of Influence”
                  </a>
                </div>

                <div className="articles_and_videos_block_item article_block_pages">
                  <a href="http://patronmagazine.com/conception-returns-to-dallas/">
                    Patron Magazine
                  </a>
                </div>

                <div className="articles_and_videos_block_item article_block_pages">
                  <a href="http://epicureandculture.com/pop-ups-around-world/">
                    Celebrate Culture With These Unforgettable Pop Ups Around The World
                  </a>
                </div>

                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="http://thesource.com/2015/11/25/art-basel-to-showcase-first-exclusively-female-run-fair/">
                    The Source
                  </a>
                </div>
                <div className="articles_and_videos_block_item article_block_pages">
                  <iframe
                    width="420"
                    height="315"
                    src="https://www.youtube.com/embed/mDAToQCW9NE?rel=0"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="https://news.artnet.com/art-world/artist-buys-trump-bus-iowa-343571">
                    Art net
                  </a>
                </div>
                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="https://artefuse.com/2012/07/17/conception-returns/">
                    Art fuse
                  </a>
                </div>
                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="http://artdaily.com/news/83291/First-woman-owned-art-fair-debuts-with-big-names#.WOJ1VXTyv0H">
                    Art Daily
                  </a>
                </div>
                <div className="articles_and_videos_block_item article_block_pages">
                  <iframe
                    width="420"
                    height="315"
                    src="https://www.youtube.com/embed/55u4L_RvsW4?rel=0"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="http://art-nerd.com/newyork/lic-emerging-artists-festival/">
                    Art Nerd
                  </a>
                </div>
                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="https://www.dnainfo.com/new-york/20140605/long-island-city/queens-arts-festival-feature-live-body-painting">
                    DNA Info
                  </a>
                </div>
                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="https://www.wsj.com/articles/art-in-queenswho-knew-1417478872">
                    Wall St. Journal
                  </a>
                </div>
                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="http://queenstribune.com/lic-gallery-celebrates-women-through-art/">
                    Queens Tribune
                  </a>
                </div>
                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="http://www.letagemagazine.com/conception-contemporary-art-fair-nyc/">
                    L’Etage Magazine
                  </a>
                </div>
                <div className="articles_and_videos_block_item article_video_pages">
                  <a href="http://www.liverpoolecho.co.uk/whats-on/arts-culture-news/conception-events-albert-dock-liverpool-8098096">
                    Liverpool Echo
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="load_more_press clearfix">
              <a href="">
                Load More Press
              </a>
            </div> */}
          </div>

          <BottomLatestNews />
          <BottomMenu />
        </main>
        <Footer />
      </div>
    );
  }

}

Press.propTypes = {};


/**
 * Connect to Redux store.
 */
export default Press;
