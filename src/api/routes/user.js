const user = (app) =>{
  app.get("/:name", function(req, res) {
    res.status(200).json({ name: req.params.name });
  });
  app.post("/name/:name", function(req, res) {
    res.status(200).json({ name: req.params.name });
  });
  app.post("/new/name", function(req, res) {
    res.status(200).send(req.body.name);
  });
  return app
  }
  
  export default user;