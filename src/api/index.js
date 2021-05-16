import { Router } from "express";
import test from './routes/test'
/*import user from './routes/user'; */
// guaranteed to get dependencies
export default () => {
  const app = Router();
/*   app.get("", function (req, res) {
    res.send("Hello World!, this is my first API");
  }); */
   test(app);
	//user(app); 

  return app;
};

