'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _HeaderSocial = require('../components/HeaderSocial');

var _HeaderSocial2 = _interopRequireDefault(_HeaderSocial);

var _HeaderNav = require('../components/HeaderNav');

var _HeaderNav2 = _interopRequireDefault(_HeaderNav);

var _HeaderLogin = require('../components/HeaderLogin');

var _HeaderLogin2 = _interopRequireDefault(_HeaderLogin);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = 'https://conceptionarts-api.herokuapp.com/api/artist';
var PHOTO_URL = 'https://res.cloudinary.com/conceptionarts/image/fetch/w_328,h_200,c_fill/https://artistworks.s3-us-west-2.amazonaws.com/artists_images';
var THUMBNAIL_URL = 'https://res.cloudinary.com/conceptionarts/image/fetch/w_248,h_200,c_fill/https://artistworks.s3-us-west-2.amazonaws.com/artists_images';

var Artist = function (_Component) {
  (0, _inherits3.default)(Artist, _Component);

  (0, _createClass3.default)(Artist, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req;
        var response;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(req && req.params)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return _axios2.default.get(BASE_URL + '/' + req.params.user_token);

              case 3:
                response = _context.sent;
                return _context.abrupt('return', { artist: response.data[0] });

              case 5:
                return _context.abrupt('return', {});

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Artist(props) {
    (0, _classCallCheck3.default)(this, Artist);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Artist.__proto__ || (0, _getPrototypeOf2.default)(Artist)).call(this, props));

    _this.state = { artist: null };
    return _this;
  }

  (0, _createClass3.default)(Artist, [{
    key: 'componentWillMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var userToken, response;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.props.artist) {
                  _context2.next = 7;
                  break;
                }

                userToken = decodeURI(_index2.default.router.as);

                userToken = userToken.split('/')[2];
                _context2.next = 5;
                return _axios2.default.get(BASE_URL + '/' + userToken);

              case 5:
                response = _context2.sent;

                this.setState({ artist: response.data[0] });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _ref3.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var artist = this.props.artist || this.state.artist;
      if (!artist) {
        return _react2.default.createElement('div', null, 'loading...');
      }
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Artist - Conception arts'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), _react2.default.createElement('header', { className: 'page_header portfolio_header' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'logo col-lg-6 col-md-5 col-sm-4 col-xs-12' }, _react2.default.createElement(_link2.default, { href: '/index' }, _react2.default.createElement('a', null, _react2.default.createElement('img', { src: '/static/img/logo_white.png', alt: '' })))), _react2.default.createElement('div', { className: 'header_nav col-lg-6 col-md-7 col-sm-8 col-xs-12' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_HeaderLogin2.default, null), _react2.default.createElement(_HeaderNav2.default, null), _react2.default.createElement(_HeaderSocial2.default, null)))), _react2.default.createElement('div', { className: 'page_title artist_page_title' }, _react2.default.createElement('div', null, 'Artists')))), _react2.default.createElement('main', { className: 'main_block_page portfolio_page' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'heading_block' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'page_block_title col-md-8 col-sm-12' }, artist.full_name), _react2.default.createElement('div', { className: 'logout col-md-4 col-sm-12' }, _react2.default.createElement('a', { href: '' }, 'BUY TICKETS')))), _react2.default.createElement('div', { className: 'artist_content' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'artist_content_photo col-md-4 col-sm-4 col-xs-12' }, _react2.default.createElement('div', { className: 'artist_content_photo_inner' }, _react2.default.createElement('div', { className: 'artist_content_photo_inner_displayed' }, _react2.default.createElement('img', { src: PHOTO_URL + '/' + artist.photo, alt: '' })))), _react2.default.createElement('div', { className: 'artist_content_top_text col-md-8 col-sm-8 col-xs-12' }, _react2.default.createElement('div', { className: 'artist_content_top_text_title' }, artist.genre), _react2.default.createElement('div', { className: 'artist_content_top_text_city' }, _react2.default.createElement('span', null, 'Dallas'), _react2.default.createElement('span', null, 'TX')), _react2.default.createElement('div', { className: 'artist_content_top_text_description' }, artist.story))), _react2.default.createElement('div', { className: 'share_links' }, artist.facebook_url !== '' && _react2.default.createElement('div', { className: 'share_links_item' }, _react2.default.createElement('a', { href: '' }, _react2.default.createElement('span', { className: 'facebook' }, _react2.default.createElement('i', { className: 'fa fa-facebook', 'aria-hidden': 'true' })), 'on Facebook')), artist.twitter_url !== '' && _react2.default.createElement('div', { className: 'share_links_item' }, _react2.default.createElement('a', { href: '' }, _react2.default.createElement('span', { className: 'twitter' }, _react2.default.createElement('i', { className: 'fa fa-twitter', 'aria-hidden': 'true' })), 'on Twitter')), artist.instagram !== '' && _react2.default.createElement('div', { className: 'share_links_item' }, _react2.default.createElement('a', { href: '' }, _react2.default.createElement('span', { className: 'pinterest' }, _react2.default.createElement('i', { className: 'fa fa-instagram', 'aria-hidden': 'true' })), 'on Instagram'))), _react2.default.createElement('div', { className: 'artist_photoes' }, artist.artwork_1 && _react2.default.createElement('div', { className: 'artist_photoe_item col-lg-3 col-md-4 col-sm-6 col-xs-12' }, _react2.default.createElement('div', { className: 'artist_photoe_item_inner' }, _react2.default.createElement('img', { src: THUMBNAIL_URL + '/' + artist.artwork_1, alt: '' }))), artist.artwork_2 && _react2.default.createElement('div', { className: 'artist_photoe_item col-lg-3 col-md-4 col-sm-6 col-xs-12' }, _react2.default.createElement('div', { className: 'artist_photoe_item_inner' }, _react2.default.createElement('img', { src: THUMBNAIL_URL + '/' + artist.artwork_2, alt: '' }))), artist.artwork_3 && _react2.default.createElement('div', { className: 'artist_photoe_item col-lg-3 col-md-4 col-sm-6 col-xs-12' }, _react2.default.createElement('div', { className: 'artist_photoe_item_inner' }, _react2.default.createElement('img', { src: THUMBNAIL_URL + '/' + artist.artwork_3, alt: '' })))))), this.state.modal && _react2.default.createElement('div', null)), _react2.default.createElement(_Footer2.default, null));
    }
  }]);

  return Artist;
}(_react.Component);

exports.default = Artist;