import React from 'react';

export default() => (
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
              <input type="text" placeholder="Enter your email address" />

              <input type="submit" value="SIGN UP" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
