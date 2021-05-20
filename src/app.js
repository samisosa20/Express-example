// Packages
import express from "express"
import path from "path";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import "regenerator-runtime/runtime";
import { Router } from "express";

// Settings
import config from "./config";

// Routes
import api from "./api";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = Router();

// hace llamado a todas las rutas
router.use(`/api/${config.apiVersion || 'v1'}`, api());

//The 404 Route (ALWAYS Keep this as the last route)
router.all('*', function(req, res){
  res.status(404).json({ result: "Page not found" });
});

// Le indica al sistema que rutas se van ha usar
app.use(router);
app.use(express.static(path.join(__dirname, "../public")));


app.listen(config.port || 3000, function() {
  console.log(`Node server running on http://localhost:${config.port || 3000}`);
});
