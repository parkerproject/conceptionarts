'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/parker.ituk/dev/with-redux/components/Home/EventCities/index.js';


function EventCities(props) {
  var events = (0, _lodash.map)(props, function (event) {
    return _react2.default.createElement('div', { className: 'cities_buy_tickets_item index_cities clearfix', key: event.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, _react2.default.createElement('div', { className: 'cities_buy_tickets_item_title', __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, event.name.text));
  });
  return _react2.default.createElement('div', { className: 'cities_buy_tickets', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement('div', { className: 'small_title', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'Click To Expand'), events, _react2.default.createElement('div', { className: 'cities_buy_tickets_item index_cities clearfix', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('div', { className: 'cities_buy_tickets_item_title', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'New York City'))));
}

exports.default = EventCities;