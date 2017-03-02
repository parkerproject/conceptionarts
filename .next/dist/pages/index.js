'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _actions = require('../actions');

var _types = require('../actions/types');

var _store = require('../store');

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _BottomMenu = require('../components/Home/BottomMenu');

var _BottomMenu2 = _interopRequireDefault(_BottomMenu);

var _BottomLatestNews = require('../components/Home/BottomLatestNews');

var _BottomLatestNews2 = _interopRequireDefault(_BottomLatestNews);

var _FeaturedOn = require('../components/Home/FeaturedOn');

var _FeaturedOn2 = _interopRequireDefault(_FeaturedOn);

var _Testimonials = require('../components/Home/Testimonials');

var _Testimonials2 = _interopRequireDefault(_Testimonials);

var _EventCities = require('../components/Home/EventCities');

var _EventCities2 = _interopRequireDefault(_EventCities);

var _WhatsNew = require('../components/Home/WhatsNew');

var _WhatsNew2 = _interopRequireDefault(_WhatsNew);

var _ArtistsCollector = require('../components/Home/ArtistsCollector');

var _ArtistsCollector2 = _interopRequireDefault(_ArtistsCollector);

var _BringArt = require('../components/Home/BringArt');

var _BringArt2 = _interopRequireDefault(_BringArt);

var _HeaderSocial = require('../components/HeaderSocial');

var _HeaderSocial2 = _interopRequireDefault(_HeaderSocial);

var _HeaderNav = require('../components/HeaderNav');

var _HeaderNav2 = _interopRequireDefault(_HeaderNav);

var _HeaderLogin = require('../components/HeaderLogin');

var _HeaderLogin2 = _interopRequireDefault(_HeaderLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  (0, _createClass3.default)(Home, null, [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var store = _ref.store;

      var response = '/api/events';

      console.log(response);

      // response.then((data) => {
      //   console.log(data);
      // })
      // .catch(err => console.log('cant get data', err));

      // store.dispatch({
      //   type: FETCH_EVENTS,
      //   payload: response.data.events,
      // });

      return {};
    }
  }]);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.state = { events: [], name: 'Parker' };
    return _this;
  }

  // componentWillMount() {
  //   this.props.getEvents();
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { events } = nextProps;
  //   this.setState({ events });
  // }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Conception arts'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), _react2.default.createElement('header', { className: 'page_header portfolio_header index_header' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'logo col-lg-6 col-md-5 col-sm-4 col-xs-12' }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', null, _react2.default.createElement('img', { src: '/static/img/logo_white.png', alt: '' })))), _react2.default.createElement('div', { className: 'header_nav col-lg-6 col-md-7 col-sm-8 col-xs-12' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_HeaderLogin2.default, null), _react2.default.createElement(_HeaderNav2.default, null), _react2.default.createElement(_HeaderSocial2.default, null)))), _react2.default.createElement('div', { className: 'page_title artist_page_title index_page_artist' }, _react2.default.createElement('div', { className: 'art_for' }, 'Art for art\u2019s sake.', _react2.default.createElement(_link2.default, { href: '/collector' }, _react2.default.createElement('a', null, 'COLLECTOR')), _react2.default.createElement(_link2.default, { href: '/artist-general' }, _react2.default.createElement('a', null, 'ARTIST'))), _react2.default.createElement('div', null, 'We are that art that you want to know more about art.'), _react2.default.createElement('div', { className: 'index_page_artist_scroll' }, 'Scroll down to learn more')), _react2.default.createElement('div', { className: 'clearfix' }, _react2.default.createElement('div', { className: 'submit_index_page_wrap' }, _react2.default.createElement('div', { className: 'submit_index_page col-md-6 col-sm-6 col-xs-12' }, _react2.default.createElement(_link2.default, { href: '/register' }, _react2.default.createElement('a', null, 'SUBMIT YOUR WORK'))))))), _react2.default.createElement('main', { className: 'main_block_page about_page' }, _react2.default.createElement(_BringArt2.default, null), _react2.default.createElement(_ArtistsCollector2.default, null), _react2.default.createElement('div', { className: 'more_of_wats_new' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'submit_index_page_wrap' }, _react2.default.createElement('div', { className: 'more_whats_new col-md-7 col-sm-7 col-xs-12' }, _react2.default.createElement(_link2.default, { href: '/whats-new' }, _react2.default.createElement('a', null, 'More of What\u2019s New')))))), _react2.default.createElement(_WhatsNew2.default, null), _react2.default.createElement(_EventCities2.default, this.state.events), _react2.default.createElement('div', { className: 'view_more_shows clearfix' }, _react2.default.createElement('div', { className: 'submit_index_page col-lg-4 col-md-6 col-sm-6 col-xs-12' }, _react2.default.createElement(_link2.default, { href: '/shows' }, _react2.default.createElement('a', null, 'View More Shows')))), _react2.default.createElement(_Testimonials2.default, null), _react2.default.createElement(_FeaturedOn2.default, null), _react2.default.createElement(_BottomLatestNews2.default, null), _react2.default.createElement(_BottomMenu2.default, null)), _react2.default.createElement(_Footer2.default, null));
    }
  }]);

  return Home;
}(_react.Component);

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

/**
 * Connect to Redux store.
 */
exports.default = (0, _store.nextConnect)(mapStateToProps, { getEvents: _actions.getEvents })(Home);