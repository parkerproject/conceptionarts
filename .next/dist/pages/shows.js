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

var _lodash = require('lodash');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _store = require('../store');

var _types = require('../actions/types');

var _actions = require('../actions');

var _HeaderSocial = require('../components/HeaderSocial');

var _HeaderSocial2 = _interopRequireDefault(_HeaderSocial);

var _HeaderNav = require('../components/HeaderNav');

var _HeaderNav2 = _interopRequireDefault(_HeaderNav);

var _HeaderLogin = require('../components/HeaderLogin');

var _HeaderLogin2 = _interopRequireDefault(_HeaderLogin);

var _BottomMenu = require('../components/Home/BottomMenu');

var _BottomMenu2 = _interopRequireDefault(_BottomMenu);

var _BottomLatestNews = require('../components/Home/BottomLatestNews');

var _BottomLatestNews2 = _interopRequireDefault(_BottomLatestNews);

var _Footer = require('../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = 'https://conceptionarts-api.herokuapp.com/api/events';
var PHOTO_URL = 'http://res.cloudinary.com/conceptionarts/image/fetch/w_233,h_230,c_fill/https://artistworks.s3-us-west-2.amazonaws.com/artists_images';

var Shows = function (_Component) {
  (0, _inherits3.default)(Shows, _Component);

  (0, _createClass3.default)(Shows, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req,
            store = _ref2.store;
        var response, show;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(req && req.params)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return _axios2.default.get(BASE_URL);

              case 3:
                response = _context.sent;

                store.dispatch({
                  type: _types.FETCH_EVENTS,
                  payload: response.data.events
                });
                show = (0, _lodash.filter)(response.data.events, function (event) {
                  return event.id === req.params.id;
                });
                return _context.abrupt('return', { show: show });

              case 7:
                return _context.abrupt('return', {});

              case 8:
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

  function Shows(props) {
    (0, _classCallCheck3.default)(this, Shows);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Shows.__proto__ || (0, _getPrototypeOf2.default)(Shows)).call(this, props));

    _this.state = { show: null, address: {}, artists: [] };
    return _this;
  }

  (0, _createClass3.default)(Shows, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.show) {
        var id = decodeURI(_index2.default.router.as);
        id = id.split('/')[2];
        var show = (0, _lodash.filter)(this.props.events, function (event) {
          return event.id === id;
        });
        this.setState({ show: show });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var show = this.state.show || this.props.show;
      (0, _actions.getVenue)(show[0].venue_id, function (address) {
        _this2.setState({ address: address });
      });

      (0, _actions.getArtists)(show[0].id, function (artists) {
        _this2.setState({ artists: artists });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var show = this.state.show || this.props.show;

      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Shows - Conception arts'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), _react2.default.createElement('header', { className: 'page_header portfolio_header show_header' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'logo col-lg-6 col-md-5 col-sm-4 col-xs-12' }, _react2.default.createElement(_link2.default, { href: '/index' }, _react2.default.createElement('a', null, _react2.default.createElement('img', { src: '/static/img/logo_white.png', alt: '' })))), _react2.default.createElement('div', { className: 'header_nav col-lg-6 col-md-7 col-sm-8 col-xs-12' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_HeaderLogin2.default, null), _react2.default.createElement(_HeaderNav2.default, null), _react2.default.createElement(_HeaderSocial2.default, null)))), _react2.default.createElement('div', { className: 'page_title artist_page_title' }, _react2.default.createElement('div', { className: 'artist_page_top_title' }, 'SHOWS'), _react2.default.createElement('div', null, 'Check out these city shows')))), _react2.default.createElement('main', { className: 'main_block_page about_page' }, _react2.default.createElement('div', { className: 'shows_city_detalis' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'row-eq-height block_eq' }, _react2.default.createElement('div', { className: 'shows_city_detalis_title col-xl-7 col-lg-7 col-md-6 col-sm-12' }, _react2.default.createElement('div', { className: 'shows_city_detalis_title_title' }, show[0].name.text), _react2.default.createElement('div', { className: 'shows_city_detalis_title_date' }, (0, _moment2.default)(show[0].start.local).format('MMMM Do YYYY'), ' -', this.state.address.address && this.state.address.address.address_1), _react2.default.createElement('div', { className: 'shows_city_detalis_title_time' }, (0, _moment2.default)(show[0].start.local).format('h:mm a'), ' -', (0, _moment2.default)(show[0].end.local).format('h:mm a'), ' | ', this.state.address.name)), _react2.default.createElement('div', { className: 'shows_city_detalis_image col-xl-5 col-lg-5 col-md-6 col-sm-12' }, _react2.default.createElement('img', { src: show[0].logo.original.url, alt: '' })))), _react2.default.createElement('div', { className: 'shows_city_detalis_text_only' }, show[0].description.text))), _react2.default.createElement('div', { className: 'purchache_tickets' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'purchache_tickets_title' }, 'Purchase Tickets'), _react2.default.createElement('div', { className: 'purchache_tickets_sub_title' }, 'Please support our artists by clicking on their Profile to Purchase a ticket'), _react2.default.createElement('div', { className: 'purchase_without' }, 'To purchase without an artist please click ', _react2.default.createElement('a', { href: '' }, 'here')), _react2.default.createElement('div', { className: 'select_and_buy_tickets' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'select_and_buy_tickets_select col-md-7 col-xs-12' }, _react2.default.createElement('select', { name: '', id: '' }, _react2.default.createElement('option', { value: '' }, 'SELECT AN ARTIST ...'), _react2.default.createElement('option', { value: '' }, 'SELECT AN ARTIST ...'), _react2.default.createElement('option', { value: '' }, 'SELECT AN ARTIST ...'))), _react2.default.createElement('div', { className: 'select_and_buy_tickets_button col-md-5 col-xs-12' }, _react2.default.createElement('input', { type: 'submit', value: 'BUY TICKETS' })))))), _react2.default.createElement('div', { className: 'shows_artists' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'portfolio_items clearfix' }, _react2.default.createElement('div', { className: 'row row-eq-height block_eq' }, (0, _lodash.map)(this.state.artists, function (artist) {
        return _react2.default.createElement('div', { className: 'portfolio_item col-lg-3 col-md-6 col-xs-12', key: artist.user_token }, _react2.default.createElement('div', { className: 'portfolio_item_inner' }, _react2.default.createElement('div', { className: 'portfolio_item_content' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_image' }, _react2.default.createElement('img', { src: PHOTO_URL + '/' + artist.photo, alt: '' })), _react2.default.createElement('div', { className: 'portfolio_item_inner_title' }, _react2.default.createElement('div', { className: 'portfolio_item_inner_title_shows_title' }, artist.full_name), _react2.default.createElement('div', { className: 'portfolio_item_inner_title_shows_category' }, artist.genre)), _react2.default.createElement('div', { className: 'portfolio_item_inner_link' }, _react2.default.createElement(_link2.default, {
          href: '/artist',
          as: '/artist/' + artist.user_token
        }, _react2.default.createElement('a', null, 'view'))))));
      }))))), _react2.default.createElement(_BottomLatestNews2.default, null), _react2.default.createElement(_BottomMenu2.default, null)), _react2.default.createElement(_Footer2.default, null));
    }
  }]);

  return Shows;
}(_react.Component);

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

/**
 * Connect to Redux store.
 */
exports.default = (0, _store.nextConnect)(mapStateToProps, null)(Shows);