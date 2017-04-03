import React from 'react';
import Link from 'next/link';

export default() => (
  <div className="bottom_menu clearfix">
    <div className="container">
      <div className="row">
        {/* <div className="stay_in_touch_item_title col-xl-2 col-lg-3 col-md-4 col-sm-12">
          302 E. West St. New York, NY 59699
        </div> */}
        <div className="stay_in_touch_item_menu col-xl-10 col-lg-9 col-md-8 col-sm-12">
          <ul>
            <li><Link href="/about"><a>About Us</a></Link></li>
            <li><Link href="/whats-new"><a>What’s New</a></Link></li>
            <li><Link href="/press"><a>Press</a></Link></li>
            <li><Link href="/shows"><a>Shows</a></Link></li>
            <li><Link href="/faq"><a>FAQ</a></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
