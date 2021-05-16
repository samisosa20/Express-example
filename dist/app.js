"use strict";

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _methodOverride = _interopRequireDefault(require("method-override"));

var _config = _interopRequireDefault(require("./config"));

var _express = require("express");

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require("express"),
    app = express();

app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use((0, _methodOverride["default"])());
var router = (0, _express.Router)(); // hace llamado a todas las rutas

router.use("/api/v1", (0, _api["default"])()); // Le indica al sistema que rutas se van ha usar

app.use(router);
app.use(express["static"](_path["default"].join(__dirname, "../public")));
app.listen(_config["default"].port, function () {
  console.log("Node server running on http://localhost:".concat(_config["default"].port));
});