"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _spellCheck = _interopRequireDefault(require("../helpers/spellCheck"));

var _fetchData = _interopRequireDefault(require("../requests/fetchData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Route = /*#__PURE__*/function () {
  function Route(params) {
    _classCallCheck(this, Route);

    var route = params.route,
        database = params.database;

    var router = _express["default"].Router();

    router.get("/".concat(route), function (req, res) {
      res.send(database);
    });
    router.get("/".concat(route, "/:name"), function (req, res) {
      //spell check gets the proper url name for us for the get request to the risk of rain wiki
      params.target = (0, _spellCheck["default"])(req.params.name, database[0]);
      if (params.wikiRoute) params.target = (0, _spellCheck["default"])(req.params.name, database[1]); //Fetch data is pretty much a general form of our get functions in the client, we check what function in fetch data we need to execute based
      //on the route

      (0, _fetchData["default"])(params).then(function (data) {
        // console.log(data);
        // const response = { ...item, ...data };
        res.send(data);
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