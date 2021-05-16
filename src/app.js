const express = require("express"),
  app = express();
import path from "path";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import config from "./config";
import { Router } from "express";
import api from "./api";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = Router();

// hace llamado a todas las rutas
router.use("/api/v1", api());

// Le indica al sistema que rutas se van ha usar
app.use(router);
app.use(express.static(path.join(__dirname, "../public")));

app.listen(config.port, function() {
  console.log(`Node server running on http://localhost:${config.port}`);
});
