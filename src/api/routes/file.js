// Packages
import path from "path";

// Services
import { readFile, writeJsonFile, updateFile, deleteFile } from "../../services/file";

const file = path.join(__dirname, "../../../public/logs/logs.json");

const files = (app) => {
  app.get("/logs", async function (req, res) {
    const data = await readFile(file);
    res.status(data.status).json({ result: data.results });
  });

  app.post("/logs", async function (req, res) {
    const newObj = {
      date: "2021-05-20",
      data: "Hello world!",
    };
    const data = await writeJsonFile(file, newObj);
    res.status(data.status).json({ result: data.results });
  });

  app.put("/logs", async function (req, res) {
    const newObj = {
      date: "2021-05-20",
      data: "Writting in JSON file",
    };
    const data = await updateFile(file, newObj);
    res.status(data.status).json({ result: data.results });
  });
  app.delete("/logs", async function (req, res) {
    const key = 0
    const data = await deleteFile(file, key);
    res.status(data.status).json({ result: data.results });
  });
  return app;
};

export default files;
