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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _actions = require('../../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var City = function (_Component) {
  (0, _inherits3.default)(City, _Component);

  function City(props) {
    (0, _classCallCheck3.default)(this, City);

    var _this = (0, _possibleConstructorReturn3.default)(this, (City.__proto__ || (0, _getPrototypeOf2.default)(City)).call(this, props));

    _this.state = { open: false };
    return _this;
  }

  (0, _createClass3.default)(City, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log((0, _actions.getVenue)(this.props.venue_id));
      return _react2.default.createElement('div', { className: 'cities_buy_tickets_item index_cities clearfix' }, _react2.default.createElement('div', { className: 'cities_buy_tickets_item_title' }, _react2.default.createElement('span', { onClick: function onClick() {
          return _this2.toggle();
        } }, this.props.name.text)), this.state.open && _react2.default.createElement('div', { className: 'cities_buy_tickets_places' }, _react2.default.createElement('div', { className: 'cities_buy_tickets_places_item' }, (0, _moment2.default)(this.props.start.local).format('MMMM Do'), ' |')));
    }
  }]);

  return City;
}(_react.Component);

City.propTypes = {
  name: _react2.default.PropTypes.object,
  start: _react2.default.PropTypes.object,
  venue_id: _react2.default.PropTypes.string
};

exports.default = City;