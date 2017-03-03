webpackHotUpdate(4,{

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVenue = undefined;

var _regenerator = __webpack_require__(80);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(79);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = __webpack_require__(568);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { FETCH_EVENTS } from './types';

// let githubApi = "https://api.github.com";
// if (__CLIENT__) {
// 	const { protocol, hostname, port } = window.location;
// 	githubApi = `${protocol}//${hostname}:${port}/api/github`;
// }

var getVenue = exports.getVenue = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(venueId) {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.get('https://conceptionarts-api.herokuapp.com/api/venues/' + venueId);

          case 2:
            response = _context.sent;
            return _context.abrupt('return', response.then(function (res) {
              console.log(res);
              return res ? res.name : '';
            }));

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getVenue(_x) {
    return _ref.apply(this, arguments);
  };
}();

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/parker.ituk/dev/with-redux/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/parker.ituk/dev/with-redux/actions/index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzP2JmMjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7OztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7OzhDQUFBO3dFQUFPLGlCQUF3QixTQUF4QjtRQUFBO2tFQUFBO2dCQUFBO3lDQUFBO2VBQUE7NEJBQUE7bUJBQ2tCLGdCQUFNLDZEQUEyRDs7ZUFBbEY7QUFERDtzREFHVyxLQUFLLFVBQUMsS0FDcEI7c0JBQVEsSUFDUjtxQkFBTyxNQUFNLElBQUksT0FDbEI7QUFITTs7ZUFIRjtlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQVA7O2tCQUFzQixhQUF0Qjs0QkFBQTtBQUFBIiwiZmlsZSI6IjQuM2E4Zjc1YzI0N2MyMzYyYWIyZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vLyBpbXBvcnQgeyBGRVRDSF9FVkVOVFMgfSBmcm9tICcuL3R5cGVzJztcblxuLy8gbGV0IGdpdGh1YkFwaSA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbVwiO1xuLy8gaWYgKF9fQ0xJRU5UX18pIHtcbi8vIFx0Y29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbi8vIFx0Z2l0aHViQXBpID0gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfToke3BvcnR9L2FwaS9naXRodWJgO1xuLy8gfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VmVudWUodmVudWVJZCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cHM6Ly9jb25jZXB0aW9uYXJ0cy1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdmVudWVzLyR7dmVudWVJZH1gKTtcblxuICByZXR1cm4gcmVzcG9uc2UudGhlbigocmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICByZXR1cm4gcmVzID8gcmVzLm5hbWUgOiAnJztcbiAgfSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==