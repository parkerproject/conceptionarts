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
  return _react2.default.createElement('div', { className: 'header_nav_menu col-md-5 col-sm-5 col-xs-12' }, _react2.default.createElement('div', { className: 'header_nav_menu_inner' }, _react2.default.createElement('ul', null, _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/about' }, _react2.default.createElement('a', null, 'ABOUT US'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/whats-new' }, _react2.default.createElement('a', null, 'WHAT\u2019S NEW'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/shows' }, _react2.default.createElement('a', null, 'SHOWS'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/press' }, _react2.default.createElement('a', null, 'PRESS'))), _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { href: '/contact' }, _react2.default.createElement('a', null, 'CONTACT'))))));
};