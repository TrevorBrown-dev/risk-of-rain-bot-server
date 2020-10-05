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
  var health = 'Health';
  var healthInfo = text.match(/(?<=Health\n)(.*){1}/);
  var damage = 'Damage';
  var damageInfo = text.match(/(?<=Damage\n)(.*){1}/);
  var speed = 'Speed';
  var speedInfo = text.match(/(?<=Speed\n)(.*){1}/);
  var healthRegen = 'Health Regen';
  var healthRegenInfo = text.match(/(?<=Health Regen\n)(.*){1}/);
  var armor = 'Armor';
  var armorInfo = text.match(/(?<=Armor\n)(.*){1}/);
  var cost = 'Base Cost';
  var costInfo = text.match(/(?<=Base Cost\n)(.*){1}/);
  return {
    health: {
      name: health,
      value: healthInfo ? healthInfo[0] : ''
    },
    damage: {
      name: damage,
      value: damageInfo ? damageInfo[0] : ''
    },
    speed: {
      name: speed,
      value: speedInfo ? speedInfo[0] : ''
    },
    healthRegen: {
      name: healthRegen,
      value: healthRegenInfo ? healthRegenInfo[0] : ''
    },
    armor: {
      name: armor,
      value: armorInfo ? armorInfo[0] : ''
    },
    cost: {
      name: cost,
      value: costInfo ? costInfo[0] : ''
    }
  };
};

var getDrone = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(droneName) {
    var response, page, document, name, text, description, body, image;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get("https://riskofrain2.gamepedia.com/".concat(droneName))["catch"](function (error) {
              console.log(error);
            });

          case 2:
            response = _context.sent;
            page = new JSDOM(response.data);
            document = page.window.document;
            name = document.querySelector('.infoboxname').textContent;
            text = document.querySelector('.infoboxtable').textContent.trim();
            description = document.querySelector('.mw-parser-output p').textContent;
            text = text.replace(name, '');
            text = text.replace(/\(/g, '*(');
            text = text.replace(/\)/g, ')*');
            body = formatText(text);
            image = document.querySelector('.infoboxtable img').src;
            return _context.abrupt("return", _objectSpread({
              name: name,
              description: description,
              image: image
            }, body));

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDrone(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getDrone;
exports["default"] = _default;