'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _BottomMenu = require('../components/Home/BottomMenu');

var _BottomMenu2 = _interopRequireDefault(_BottomMenu);

var _BottomLatestNews = require('../components/Home/BottomLatestNews');

var _BottomLatestNews2 = _interopRequireDefault(_BottomLatestNews);

var _HeaderSocial = require('../components/HeaderSocial');

var _HeaderSocial2 = _interopRequireDefault(_HeaderSocial);

var _HeaderNav = require('../components/HeaderNav');

var _HeaderNav2 = _interopRequireDefault(_HeaderNav);

var _HeaderLogin = require('../components/HeaderLogin');

var _HeaderLogin2 = _interopRequireDefault(_HeaderLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About() {
    (0, _classCallCheck3.default)(this, About);

    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
  }

  (0, _createClass3.default)(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'About Us - Conception Arts'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), _react2.default.createElement('header', { className: 'page_header portfolio_header' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'logo col-lg-6 col-md-5 col-sm-4 col-xs-12' }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, _react2.default.createElement('img', { src: '/static/img/logo_white.png', alt: '' })))), _react2.default.createElement('div', { className: 'header_nav col-lg-6 col-md-7 col-sm-8 col-xs-12' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_HeaderLogin2.default, null), _react2.default.createElement(_HeaderNav2.default, null), _react2.default.createElement(_HeaderSocial2.default, null)))), _react2.default.createElement('div', { className: 'page_title artist_page_title' }, _react2.default.createElement('div', { className: 'artist_page_top_title' }, 'ABOUT US'), _react2.default.createElement('div', null, 'Exactly what is Conception?'), _react2.default.createElement('div', { className: 'artist_page_top_links' }, _react2.default.createElement('a', { href: '' }, 'Our Platform'), _react2.default.createElement('a', { href: '' }, 'How It All Began'))))), _react2.default.createElement('main', { className: 'main_block_page about_page' }, _react2.default.createElement('div', { className: 'attend_wrap clearfix' }, _react2.default.createElement('div', { className: 'attend_wrap_link col-lg-6 col-md-8 col-xs-12' }, _react2.default.createElement('a', { href: '' }, 'ATTEND AN EVENT'))), _react2.default.createElement('div', { className: 'our_mission clearfix' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'row-eq-height responvive_flex' }, _react2.default.createElement('div', { className: 'submit_work_about col-lg-4 col-md-4 col-xs-12' }, _react2.default.createElement('div', { className: 'submit_work_about_inner' }, _react2.default.createElement('div', { className: 'submit_work_about_inner_text' }, 'We welcome submissions from artists/ musicians/ performers of ALL mediums.'), _react2.default.createElement('div', { className: 'submit_work_about_inner_button' }, _react2.default.createElement('a', { href: '' }, 'SUBMIT WORK')))), _react2.default.createElement('div', { className: 'our_mission_text col-lg-8 col-md-8 col-xs-12' }, _react2.default.createElement('div', { className: 'our_mission_text_inner' }, _react2.default.createElement('div', { className: 'our_mission_text_title' }, 'Our Mission'), _react2.default.createElement('div', { className: 'our_mission_text_text' }, 'Conception is a global movement: one that is not just trying to make a difference for each artist who participates, but also for the community at large. Our mission is to reshape and reenergize artistic communities around the world. To inspire ideas and provide a greenhouse for creativity and to nurture and mentor the creative groundbreakers of tomorrow.')))))), _react2.default.createElement('div', { className: 'map_block' }, _react2.default.createElement('div', { className: 'map_block_title' }, 'Highlighted Cities'), _react2.default.createElement('div', { className: 'map_block_inner' }, _react2.default.createElement('div', { className: 'map_block_inner_address' }, '2049 Western St. Denver, CO 89699'))), _react2.default.createElement('div', { className: 'our_platform clearfix' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'our_platform_title' }, 'Our Platform'), _react2.default.createElement('div', { className: 'our_platform_text' }, _react2.default.createElement('p', null, 'At Conception we work tirelessly to put you, the artist, in front of those who value and appreciate art. It is the cornerstone of our business as an arts-based company. We take this mission very seriously and invest all of our energy into making this promise a reality. We provide the full complement of tools and resources, both intellectual and actual, to make certain that you succeed in your goals, as they are our goals, too.'), _react2.default.createElement('p', null, 'Exhibit \u2013 Our quarterly curated exhibits give you the opportunity to showcase and sell your original artwork in person. Through encouragement, support and community building, we  also strengthen your relationships with your local galleries, professionals and artistic peers.'), _react2.default.createElement('p', null, 'Award \u2013 At each of our quarterly exhibits, our panel of industry experts vote to award one artist with our prestigious  \u2018Award for Excellence\u2019 by considering the following: Originality, Craftsmanship and Presentation.'), _react2.default.createElement('p', null, 'Online \u2013 We create an online presence for you and your work. We provide you with a digital portfolio on our website where collectors and art industry professionals can discover, share and learn more about your work. We also promote your work via targetted digital marketing and social media campaigns, sharing your art with our 40,000+ worldwide followers.'), _react2.default.createElement('p', null, 'As a Conception artist we want you to feel a part of a team, a family that will nurture and guide you.  We look forward to welcoming you to our growing community of artists from around the world.')))), _react2.default.createElement('div', { className: 'our_team' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'our_platform_title' }, 'Our Team'), _react2.default.createElement('div', { className: 'our_team_inner' }, _react2.default.createElement('div', { className: 'portfolio_items clearfix' }, _react2.default.createElement('div', { className: 'row row-eq-height' }, _react2.default.createElement('div', { className: 'portfolio_item col-lg-4 col-md-6 col-xs-12' }, _react2.default.createElement('div', { className: 'portfolio_item_inner' }, _react2.default.createElement('div', { className: 'portfolio_item_content' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_image' }), _react2.default.createElement('div', { className: 'portfolio_item_inner_title' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_title_title' }, 'Rachel Wilkins'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_job' }, 'PRESIDENT'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_text' }, 'Rachel is the Co-Founder and Preseident of Conception Events. She has been working with art for her whole life. She loves art and wants everyone out there to be apart of it. Here is a closing sentence about how anyone can get started.')), _react2.default.createElement('div', { className: 'portfolio_item_inner_link' }, _react2.default.createElement('a', { href: '' }, 'VIEW PROFILE'))))), _react2.default.createElement('div', { className: 'portfolio_item col-lg-4 col-md-6 col-xs-12' }, _react2.default.createElement('div', { className: 'portfolio_item_inner' }, _react2.default.createElement('div', { className: 'portfolio_item_content' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_image' }), _react2.default.createElement('div', { className: 'portfolio_item_inner_title' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_title_title' }, 'Rachel Wilkins'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_job' }, 'PRESIDENT'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_text' }, 'Rachel is the Co-Founder and Preseident of Conception Events. She has been working with art for her whole life. She loves art and wants everyone out there to be apart of it. Here is a closing sentence about how anyone can get started.')), _react2.default.createElement('div', { className: 'portfolio_item_inner_link' }, _react2.default.createElement('a', { href: '' }, 'VIEW PROFILE'))))), _react2.default.createElement('div', { className: 'portfolio_item col-lg-4 col-md-6 col-xs-12' }, _react2.default.createElement('div', { className: 'portfolio_item_inner' }, _react2.default.createElement('div', { className: 'portfolio_item_content' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_image' }), _react2.default.createElement('div', { className: 'portfolio_item_inner_title' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_title_title' }, 'Rachel Wilkins'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_job' }, 'PRESIDENT'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_text' }, 'Rachel is the Co-Founder and Preseident of Conception Events. She has been working with art for her whole life. She loves art and wants everyone out there to be apart of it. Here is a closing sentence about how anyone can get started.')), _react2.default.createElement('div', { className: 'portfolio_item_inner_link' }, _react2.default.createElement('a', { href: '' }, 'VIEW PROFILE'))))), _react2.default.createElement('div', { className: 'portfolio_item col-lg-4 col-md-6 col-xs-12' }, _react2.default.createElement('div', { className: 'portfolio_item_inner' }, _react2.default.createElement('div', { className: 'portfolio_item_content' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_image' }), _react2.default.createElement('div', { className: 'portfolio_item_inner_title' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_title_title' }, 'Rachel Wilkins'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_job' }, 'PRESIDENT'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_text' }, 'Rachel is the Co-Founder and Preseident of Conception Events. She has been working with art for her whole life. She loves art and wants everyone out there to be apart of it. Here is a closing sentence about how anyone can get started.')), _react2.default.createElement('div', { className: 'portfolio_item_inner_link' }, _react2.default.createElement('a', { href: '' }, 'VIEW PROFILE'))))), _react2.default.createElement('div', { className: 'portfolio_item col-lg-4 col-md-6 col-xs-12' }, _react2.default.createElement('div', { className: 'portfolio_item_inner' }, _react2.default.createElement('div', { className: 'portfolio_item_content' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_image' }), _react2.default.createElement('div', { className: 'portfolio_item_inner_title' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_title_title' }, 'Rachel Wilkins'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_job' }, 'PRESIDENT'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_text' }, 'Rachel is the Co-Founder and Preseident of Conception Events. She has been working with art for her whole life. She loves art and wants everyone out there to be apart of it. Here is a closing sentence about how anyone can get started.')), _react2.default.createElement('div', { className: 'portfolio_item_inner_link' }, _react2.default.createElement('a', { href: '' }, 'VIEW PROFILE'))))), _react2.default.createElement('div', { className: 'portfolio_item col-lg-4 col-md-6 col-xs-12' }, _react2.default.createElement('div', { className: 'portfolio_item_inner' }, _react2.default.createElement('div', { className: 'portfolio_item_content' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_image' }), _react2.default.createElement('div', { className: 'portfolio_item_inner_title' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_title_title' }, 'Rachel Wilkins'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_job' }, 'PRESIDENT'), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_text' }, 'Rachel is the Co-Founder and Preseident of Conception Events. She has been working with art for her whole life. She loves art and wants everyone out there to be apart of it. Here is a closing sentence about how anyone can get started.')), _react2.default.createElement('div', { className: 'portfolio_item_inner_link' }, _react2.default.createElement('a', { href: '' }, 'VIEW PROFILE')))))))))), _react2.default.createElement('div', { className: 'our_platform how_it_begen clearfix' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'our_platform_title' }, 'How It All Began'), _react2.default.createElement('div', { className: 'our_platform_text' }, _react2.default.createElement('p', null, 'Conception was founded in 2011 in New York City. It was the concept of artists Rachel Wilkins and Mike Wolf. As emerging artists themselves they began to experience the stumbling blocks and lack of resources available to them that many artists come up against starting out their careers'), _react2.default.createElement('p', null, 'The duo set to work and began to create a multi-media exhibit and nurturing community platform. Conception traces its roots back to Tribeca, New York City, where its shows began welcoming hundreds of guests to each exhibit and garnering great acclaim.'), _react2.default.createElement('p', null, 'Conception has since exhibited the work of thousands of artists throughout the U.S. and UK with plans to expand into Europe in 2017.')))), _react2.default.createElement(_BottomLatestNews2.default, null), _react2.default.createElement(_BottomMenu2.default, null)), _react2.default.createElement(_Footer2.default, null));
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;