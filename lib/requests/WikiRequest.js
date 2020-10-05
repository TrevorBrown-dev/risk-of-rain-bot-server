"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _jsdom = _interopRequireDefault(require("jsdom"));

var _spellCheck = _interopRequireDefault(require("../helpers/spellCheck.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WikiRequest = /*#__PURE__*/function () {
  function WikiRequest(requestParamaters, array) {
    var _this = this;

    _classCallCheck(this, WikiRequest);

    this._array = array;
    requestParamaters = (0, _spellCheck["default"])(requestParamaters, array);
    this._RiskOfRain = _axios["default"].create({
      baseURL: 'https://riskofrain2.gamepedia.com'
    });
    this.RiskOfRain.get("/".concat(requestParamaters)).then(function (response) {
      var JSDOM = _jsdom["default"].JSDOM;
      _this._page = new JSDOM(response.data);
    });
  }

  _createClass(WikiRequest, [{
    key: "getPage",
    value: function getPage() {
      return this._page;
    }
  }, {
    key: "_query",
    value: function _query(selector) {
      return this._page.window.document.querySelector(selector);
    }
  }, {
    key: "_formatText",
    value: function _formatText(text) {}
  }]);

  return WikiRequest;
}();