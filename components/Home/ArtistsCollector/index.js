import React, { Component } from 'react';
import Link from 'next/link';
import { latestNews } from '../../../actions';

class ArtistsCollector extends Component {
  constructor() {
    super();
    this.state = { email: '', success: false };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.email === '') {
      return false;
    }
    latestNews(this.state.email);
    this.setState({ success: true, email: '' });
    return true;
  }

  render() {
    return (
      <div className="for_artist_and_collectors clearfix">
        <div className="container">
          <div className="artist_respons">
            <div className="for_artist_and_collectors_first col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="for_artist_and_collectors_first_inner">
                <div className="for_artist_and_collectors_first_inner_title">
                  <Link href="/collector"><a>For Collectors</a></Link>
                </div>
                <div className="for_artist_and_collectors_first_inner_title_text">
                  Providing you with an alternative way to experience, interact, and purchase from local artists.
                </div>
                <div className="for_artist_and_collectors_first_inner_signup">
                  <div className="for_artist_and_collectors_first_inner_signup_title">
                    Sign-up to get the latest news.
                  </div>
                  <div className="for_artist_and_collectors_first_inner_signup_input">
                    {this.state.success && <span className="alert alert-success">Thanks for signing up!</span>}
                    {!this.state.success && <form onSubmit={this.onSubmit}>
                      <input
                        type="text"
                        placeholder="Enter your email address"
                        value={this.state.email}
                        onChange={(evt) => this.setState({ email: evt.target.value })}
                      />
                      <input type="submit" value="SIGN UP" />
                    </form>}

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
                  Connecting visionary artists with savvy collectors
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
  }
}

export default ArtistsCollector;
