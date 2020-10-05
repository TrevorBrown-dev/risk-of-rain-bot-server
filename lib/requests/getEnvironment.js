"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsdom = _interopRequireDefault(require("jsdom"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var JSDOM = _jsdom["default"].JSDOM;

var formatText = function formatText(text) {
  text = text.trim().replace(/(\r\n|\n|\r){2,}/gm, '\n\n');
  var stage = 'Stage';
  var stageInfo = text.match(/(?<=Stage\n)(.*){1}/);
  var soundtrack = 'Soundtrack';
  var soundtrackInfo = text.match(/(?<=Soundtrack\n)(.*){1}/);
  var quote = 'Lunar Seer Quote';
  var quoteInfo = text.match(/(?<=Lunar Seer Quote\n)(.*){1}/);
  return {
    stage: {
      name: stage,
      value: stageInfo ? stageInfo[0] : ''
    },
    soundtrack: {
      name: soundtrack,
      value: soundtrackInfo ? soundtrackInfo[0] : ''
    },
    quote: {
      name: quote,
      value: quoteInfo ? quoteInfo[0] : ''
    }
  };
};

var getEnvironment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(environmentName) {
    var response, page, document, name, text, description, image, caption, body;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get("https://riskofrain2.gamepedia.com/".concat(environmentName))["catch"](function (error) {
              console.log(error);
            });

          case 2:
            response = _context.sent;
            page = new JSDOM(response.data);
            document = page.window.document;
            name = document.querySelector('.infoboxname').textContent;
            text = document.querySelector('.infoboxtable').textContent.trim();
            description = document.querySelector('.mw-parser-output p').textContent;
            image = document.querySelector('.infoboxtable img').src;
            caption = document.querySelector('.infoboxcaption');
            caption = caption ? caption.textContent.trim().replace(/\n+/, '') : '';
            text = text.replace(name, '');
            text = text.replace(caption, '');
            body = formatText(text);
            return _context.abrupt("return", _objectSpread({
              name: name,
              caption: caption,
              description: description,
              image: image
            }, body));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getEnvironment(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getEnvironment;
exports["default"] = _default;