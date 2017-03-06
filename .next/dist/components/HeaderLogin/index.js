'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', { className: 'header_nav_buttons col-md-6 col-sm-6 col-xs-12' }, _react2.default.createElement(_link2.default, { href: '/login' }, _react2.default.createElement('a', null, 'login')), _react2.default.createElement(_link2.default, { href: '/register', className: 'submit_work' }, _react2.default.createElement('a', null, 'SUBMIT YOUR WORK')));
};