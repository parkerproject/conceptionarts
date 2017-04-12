import React from 'react';
import Link from 'next/link';

export default() => (
  <div className="header_nav_menu col-md-5 col-sm-5 col-xs-12">
    <div className="header_nav_menu_inner">
      <ul>
        <li><Link prefetch href="/about"><a>ABOUT US</a></Link></li>
        <li><a href="http://hiconceptmag.com">MAGAZINE</a></li>
        <li><Link prefetch href="/shows"><a>SHOWS</a></Link></li>
        <li><Link prefetch href="/press"><a>PRESS</a></Link></li>
        <li><a href="mailto:info@conceptionevents.com">CONTACT</a></li>
      </ul>
    </div>
  </div>
);
