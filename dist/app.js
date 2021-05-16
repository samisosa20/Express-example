"use strict";

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
var router = (0, _express.Router)(); // simple petition GET and POST

/* router.get("/", function(req, res) {
  res.send("Hello World!");
});
router.get("/:name", function(req, res) {
  res.status(200).json({ name: req.params.name });
});
router.post("/name/:name", function(req, res) {
  res.status(200).json({ name: req.params.name });
});
router.post("/new/name", function(req, res) {
  res.status(200).send(req.body.name);
}); */

router.use("/api/v1", (0, _api["default"])());
/* router.get("/:name", function (req, res) {
  res.status(200).json({ name: req.params.name });
}); */

app.use(router);
app.listen(_config["default"].port, function () {
  console.log("Node server running on http://localhost:".concat(_config["default"].port));
});