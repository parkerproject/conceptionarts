import React from 'react';
import Link from 'next/link';

export default() => (
  <div className="for_artist_and_collectors clearfix">
    <div className="container">
      <div className="artist_respons">
        <div className="for_artist_and_collectors_first col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="for_artist_and_collectors_first_inner">
            <div className="for_artist_and_collectors_first_inner_title">
              <Link href="/collector"><a>For Collectors</a></Link>
            </div>
            <div className="for_artist_and_collectors_first_inner_title_text">
              Learn how your investment in art helps the local community
            </div>
            <div className="for_artist_and_collectors_first_inner_signup">
              <div className="for_artist_and_collectors_first_inner_signup_title">
                Sign-up to get the latest news.
              </div>
              <div className="for_artist_and_collectors_first_inner_signup_input">
                <input type="text" placeholder="Enter your email address" />
                <input type="submit" value="SIGN UP" />
              </div>
            </div>
          </div>
        </div>

        <div className="for_artist_and_collectors_first for_artist_and_collectors_last col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="for_artist_and_collectors_first_inner">
            <div className="for_artist_and_collectors_first_inner_title">
              <Link href="/artist-info"><a>For Artists</a></Link>
            </div>
            <div className="for_artist_and_collectors_first_inner_title_text">
              Let us work with you to get your art in front of the right people
            </div>
            <div className="for_artist_and_collectors_first_inner_signup">
              <div className="submit_work_about_inner_button">
                <Link href="/register">
                  <a>SUBMIT WORK</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
