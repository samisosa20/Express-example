var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  mysql = require("mysql");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

// simple petition GET and POST 
router.get("/", function(req, res) {
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
});

// group route
var user = require('./src/User')(app);
router.use('/api/v1', user);

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
