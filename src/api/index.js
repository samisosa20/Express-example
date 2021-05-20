// Packages
import { Router } from "express";

// Routes
import test from "./routes/test";
import user from "./routes/user";
import clients from "./routes/client";
import files from "./routes/file";

export default () => {
  const app = Router();
  test(app);
  user(app);
  clients(app);
  files(app);

  return app;
};
