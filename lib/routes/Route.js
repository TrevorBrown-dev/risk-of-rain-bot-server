"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _spellCheck = _interopRequireDefault(require("../helpers/spellCheck"));

var _fetchData = _interopRequireDefault(require("../requests/fetchData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Route = /*#__PURE__*/function () {
  function Route(param, database) {
    _classCallCheck(this, Route);

    var router = _express["default"].Router();

    router.get("/".concat(param), function (req, res) {
      res.send(database);
    });
    router.get("/".concat(param, "/:name"), function (req, res) {
      var item = (0, _spellCheck["default"])(req.params.name, database); //Fetch data is pretty much a general form of our get functions in the client, we check what function in fetch data we need to execute based
      //on the param

      (0, _fetchData["default"])(param, item.name).then(function (data) {
        var response = _objectSpread(_objectSpread({}, item), data);

        res.send(response);
      }); //We want to also send the parsed html stuff we need
    });
    this._router = router;
  }

  _createClass(Route, [{
    key: "getRouter",
    value: function getRouter() {
      return this._router;
    }
  }]);

  return Route;
}();

var _default = Route;
exports["default"] = _default;