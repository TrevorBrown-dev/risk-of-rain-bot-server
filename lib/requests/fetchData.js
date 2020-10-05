"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("./index");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(route, name) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = route;
            _context.next = _context.t0 === 'items' ? 3 : _context.t0 === 'interactables' ? 6 : _context.t0 === 'monsters' ? 9 : _context.t0 === 'survivors' ? 12 : _context.t0 === 'drones' ? 15 : _context.t0 === 'environments' ? 18 : _context.t0 === 'challenges' ? 21 : 24;
            break;

          case 3:
            _context.next = 5;
            return (0, _index.getItem)(name);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.next = 8;
            return (0, _index.getInteractable)(name);

          case 8:
            return _context.abrupt("return", _context.sent);

          case 9:
            _context.next = 11;
            return (0, _index.getMonster)(name);

          case 11:
            return _context.abrupt("return", _context.sent);

          case 12:
            _context.next = 14;
            return (0, _index.getSurvivor)(name);

          case 14:
            return _context.abrupt("return", _context.sent);

          case 15:
            _context.next = 17;
            return (0, _index.getDrone)(name);

          case 17:
            return _context.abrupt("return", _context.sent);

          case 18:
            _context.next = 20;
            return (0, _index.getEnvironment)(name);

          case 20:
            return _context.abrupt("return", _context.sent);

          case 21:
            _context.next = 23;
            return (0, _index.getChallenge)(name);

          case 23:
            return _context.abrupt("return", _context.sent);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = fetchData;
exports["default"] = _default;