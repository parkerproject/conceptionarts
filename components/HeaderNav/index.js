import React from 'react';
import Link from 'next/link';

export default() => (
  <div className="header_nav_menu col-md-5 col-sm-5 col-xs-12">
    <div className="header_nav_menu_inner">
      <ul>
        <li><Link href="/about"><a>ABOUT US</a></Link></li>
        <li><a href="http://hiconceptmag.com">MAGAZINE</a></li>
        <li><Link href="/shows"><a>SHOWS</a></Link></li>
        <li><Link href="/press"><a>PRESS</a></Link></li>
        <li><Link href="/contact"><a>CONTACT</a></Link></li>
      </ul>
    </div>
  </div>
);
