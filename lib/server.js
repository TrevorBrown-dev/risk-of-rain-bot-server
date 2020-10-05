"use strict";

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT ? process.env.PORT : 5000;
app.use(_routes["default"]);
app.listen(5000, function () {
  console.log("Risk of Rain 2 database is listening on https://localhost:".concat(PORT));
});