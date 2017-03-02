'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextConnect = exports.initStore = undefined;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _nextConnectRedux = require('next-connect-redux');

var _nextConnectRedux2 = _interopRequireDefault(_nextConnectRedux);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _reduxLogger2.default)();

var enhancer = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, logger));

var initStore = exports.initStore = function initStore(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
  return store;
};

var nextConnect = exports.nextConnect = (0, _nextConnectRedux2.default)(initStore);