import React, { Component } from 'react';
import { latestNews } from '../../../actions';

class BottomLatestNews extends Component {
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
      <div className="stay_in_touch stay_in_touch_about clearfix">
        <div className="container">
          <div className="stay_in_touch_item">
            <div className="row">
              <div className="stay_in_touch_item_title col-xl-2 col-lg-3 col-md-4 col-sm-12">
                STAY IN TOUCH
              </div>
              <div className="stay_in_touch_item_inputs col-xl-10 col-lg-9 col-md-8 col-sm-12">
                <div className="stay_in_touch_item_inputs_title">
                  Sign-up to get the latest news.
                </div>
                <div className="stay_in_touch_item_inputs_inner">
                  {this.state.success && <span className="alert alert-success">Thanks for signing up!</span>}
                  <form onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      value={this.state.email}
                      onChange={(evt) => this.setState({ email: evt.target.value })}
                    />

                    <input type="submit" value="SIGN UP" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomLatestNews;
