'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _city = require('./city');

var _city2 = _interopRequireDefault(_city);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EventCities(props) {
  return _react2.default.createElement('div', { className: 'cities_buy_tickets' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'small_title' }, 'Click To Expand'), (0, _lodash.map)(props, function (event) {
    return _react2.default.createElement(_city2.default, (0, _extends3.default)({}, event, { key: event.id }));
  })));
}

exports.default = EventCities;