// Controlles
import { passwordHash, createtokenLogin, verifyToken } from "../../api/controllers/users";

const user = app => {
  app.get("/:name", function(req, res) {
    res.status(200).json({ name: req.params.name });
  });
  app.get("/user/protect/:name", function(req, res) {
    const validateToken = verifyToken(req)
    if(validateToken.status){
      res.status(200).json({ name: req.params.name });
    } else {
      res.status(202).json({ result: validateToken.mensaje });
    }
  });
  app.post("/user/:name", function(req, res) {
    res.status(200).json({ name: req.params.name });
  });
  app.post("/new/user", function(req, res) {
    const obj = {
      name: req.body.name,
      lastName: req.body.lastName,
      password: passwordHash(req.body.password),
      year: req.body.year
    }
    res.status(200).json({result: obj, token: createtokenLogin(obj)});
  });
  return app;
};

export default user;
