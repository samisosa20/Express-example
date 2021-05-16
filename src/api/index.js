import { Router } from "express";
import test from "./routes/test";
import user from "./routes/user";
import clients from "./routes/mysql";
// guaranteed to get dependencies
export default () => {
  const app = Router();
  test(app);
  user(app);
  clients(app);

  return app;
};
