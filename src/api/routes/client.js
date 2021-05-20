// Packages
import { validationResult } from "express-validator";

// Validators
import valClient from "../../validator/clients";

// Services
import query from "../../services/Client";

const clients = (app) => {
  app.get("/clients/all", async function (req, res) {
    const result = await query("GETALL", req);
    res.status(result.status).json({ data: result.results });
  });

  app.get("/clients/:id", valClient.getId, async function (req, res) {
    if (!validationResult(req).isEmpty()) {
      res.status(200).json({ data: validationResult(req) });
    } else {
      const result = await query("GETID", req);
      res.status(result.status).json({ result: query.results });
    }
  });
  app.post("/clients/new", valClient.post, async function (req, res) {
    if (!validationResult(req).isEmpty()) {
      res.status(200).json({ result: validationResult(req) });
    } else {
      const result = await query("POSTNEW", req);
      res.status(result.status).json({ result: query.results });
    }
  });
  app.put("/clients/update/:id", valClient.put, async function (req, res) {
    if (!validationResult(req).isEmpty()) {
      res.status(200).json({ result: validationResult(req) });
    } else {
      const result = await query("PUTID", req);
      res.status(result.status).json({ result: query.results });
    }
  });
  app.delete(
    "/clients/delete/:id",
    valClient.getId,
    async function (req, res) {
      if (!validationResult(req).isEmpty()) {
        res.status(200).json({ result: validationResult(req) });
      } else {
        const result = await query("DELETEID", req);
        res.status(result.status).json({ result: query.results });
      }
    }
  );
};
export default clients;
