"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsdom = _interopRequireDefault(require("jsdom"));

var _axios = _interopRequireDefault(require("axios"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
    }
  };
};

var getSkill = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
    var response, page, document, count, skills, skillbox, sCount, skill;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get("https://riskofrain2.gamepedia.com/".concat(params.target.name))["catch"](function (error) {
              console.log("Error accessing url: ".concat(error.config.url));
              return {}; // console.log(error);
            });

          case 2:
            response = _context.sent;
            page = new JSDOM(response.data);
            document = page.window.document;
            count = 1;
            skills = [];
            skillbox = document.querySelector(".skillbox:nth-last-of-type(".concat(count, ")"));

            while (skillbox) {
              skillbox = document.querySelector(".skillbox:nth-last-of-type(".concat(count, ")"));

              if (skillbox) {
                sCount = 1;
                skill = skillbox.querySelector(".skill:nth-last-of-type(".concat(sCount, ")"));

                while (skill) {
                  skill = skillbox.querySelector(".skill:nth-last-of-type(".concat(sCount, ")"));

                  if (skill) {
                    skills.unshift({
                      skillText: skill.textContent
                    });
                  }

                  sCount++;
                }

                count++;
              }
            } // console.log(skills[2]);
            // const body = formatText(text);


            return _context.abrupt("return", skills);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSkill(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getSkill;
exports["default"] = _default;