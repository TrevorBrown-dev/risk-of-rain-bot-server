"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.skillsRoute = exports.survivorsRoute = exports.environmentsRoute = exports.monstersRoute = exports.challengesRoute = exports.artifactsRoute = exports.dronesRoute = exports.interactablesRoute = exports.itemsRoute = void 0;

var _Route = _interopRequireDefault(require("./Route"));

var _db = require("../db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var itemsRoute = new _Route["default"]('items', _db.items).getRouter();
exports.itemsRoute = itemsRoute;
var interactablesRoute = new _Route["default"]('interactables', _db.interactables).getRouter();
exports.interactablesRoute = interactablesRoute;
var dronesRoute = new _Route["default"]('drones', _db.drones).getRouter();
exports.dronesRoute = dronesRoute;
var artifactsRoute = new _Route["default"]('artifacts', _db.artifacts).getRouter();
exports.artifactsRoute = artifactsRoute;
var challengesRoute = new _Route["default"]('challenges', _db.challenges).getRouter();
exports.challengesRoute = challengesRoute;
var monstersRoute = new _Route["default"]('monsters', _db.monsters).getRouter();
exports.monstersRoute = monstersRoute;
var environmentsRoute = new _Route["default"]('environments', _db.environments).getRouter();
exports.environmentsRoute = environmentsRoute;
var survivorsRoute = new _Route["default"]('survivors', _db.survivors).getRouter();
exports.survivorsRoute = survivorsRoute;
var skillsRoute = new _Route["default"]('skills', _db.skills).getRouter();
exports.skillsRoute = skillsRoute;
var routes = [itemsRoute, dronesRoute, interactablesRoute, artifactsRoute, challengesRoute, monstersRoute, environmentsRoute, survivorsRoute, skillsRoute];
var _default = routes;
exports["default"] = _default;