"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.skillsRoute = exports.survivorsRoute = exports.environmentsRoute = exports.monstersRoute = exports.challengesRoute = exports.artifactsRoute = exports.dronesRoute = exports.interactablesRoute = exports.itemsRoute = void 0;

var _Route = _interopRequireDefault(require("./Route"));

var _db = require("../db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var itemsRoute = new _Route["default"]({
  route: 'items',
  target: '',
  database: _db.items
}).getRouter();
exports.itemsRoute = itemsRoute;
var interactablesRoute = new _Route["default"]({
  route: 'interactables',
  target: '',
  database: [_db.interactables]
}).getRouter();
exports.interactablesRoute = interactablesRoute;
var dronesRoute = new _Route["default"]({
  route: 'drones',
  target: '',
  database: [_db.drones]
}).getRouter();
exports.dronesRoute = dronesRoute;
var artifactsRoute = new _Route["default"]({
  route: 'artifacts',
  target: '',
  database: [_db.artifacts]
}).getRouter();
exports.artifactsRoute = artifactsRoute;
var challengesRoute = new _Route["default"]({
  route: 'challenges',
  target: '',
  database: [_db.challenges]
}).getRouter();
exports.challengesRoute = challengesRoute;
var monstersRoute = new _Route["default"]({
  route: 'monsters',
  target: '',
  database: [_db.monsters]
}).getRouter();
exports.monstersRoute = monstersRoute;
var environmentsRoute = new _Route["default"]({
  route: 'environments',
  target: '',
  database: [_db.environments]
}).getRouter();
exports.environmentsRoute = environmentsRoute;
var survivorsRoute = new _Route["default"]({
  route: 'survivors',
  database: [_db.survivors]
}).getRouter();
exports.survivorsRoute = survivorsRoute;
var skillsRoute = new _Route["default"]({
  route: 'skills',
  target: '',
  wikiRoute: 'survivors',
  database: [_db.skills, _db.survivors]
}).getRouter();
exports.skillsRoute = skillsRoute;
var routes = [itemsRoute, dronesRoute, interactablesRoute, artifactsRoute, challengesRoute, monstersRoute, environmentsRoute, survivorsRoute, skillsRoute];
var _default = routes;
exports["default"] = _default;