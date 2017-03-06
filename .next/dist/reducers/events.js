'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _types.FETCH_EVENTS:
      return (0, _extends3.default)({}, state, action.payload);
    default:
      return state;
  }
};

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _types = require('../actions/types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }