const express = require("express"),
  app = express();
import bodyParser from "body-parser";
import methodOverride from "method-override";
import config from "./config";
import { Router } from "express";
import api from "./api";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = Router();

// simple petition GET and POST
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

router.use("/api/v1", api());
/* router.get("/:name", function (req, res) {
  res.status(200).json({ name: req.params.name });
}); */

app.use(router);

app.listen(config.port, function () {
  console.log(`Node server running on http://localhost:${config.port}`);
});
