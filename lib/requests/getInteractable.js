"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsdom = _interopRequireDefault(require("jsdom"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var JSDOM = _jsdom["default"].JSDOM;

var formatText = function formatText(text) {
  text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
  text = text.replace(/\(/g, '*(');
  text = text.replace(/\)/g, ')*');
  return text;
};

var getInteractable = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(interactableName) {
    var response, page, document, name, description, image;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(interactableName);
            _context.next = 3;
            return _axios["default"].get("https://riskofrain2.gamepedia.com/".concat(interactableName))["catch"](function (error) {// console.log(error);
            });

          case 3:
            response = _context.sent;
            page = new JSDOM(response.data);
            document = page.window.document;
            name = document.querySelector('.firstHeading').textContent;
            description = formatText(document.querySelector('.mw-parser-output p').textContent);
            image = '';
            if (!interactableName.includes('Launch Pads')) image = document.querySelector('.thumbinner img').src;
            return _context.abrupt("return", {
              name: name,
              description: description,
              image: image
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getInteractable(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getInteractable;
exports["default"] = _default;