// Packages
import fs from "fs";
import path from "path";

const files = app => {
  app.get("/logs", function(req, res) {
    const file = path.join(__dirname, "../../../public/logs/logs.json");
    fs.access(file, err => {
      if (err) {
        res.status(404).json({ result: "The file does not exist." });
      } else {
        fs.readFile(file, function(err, data) {
          if (err) {
            res.status(404).json({ result: err });
          } else {
            res.status(200).json({ result: JSON.parse(data) });
          }
        });
      }
    });
  });

  app.post("/logs", function(req, res) {
    const file = path.join(__dirname, "../../../public/logs/logs.json");
    fs.access(file, err => {
      if (err) {
        res.status(404).json({ result: "The file does not exist." });
      } else {
        fs.readFile(file, function(err, data) {
          if (err) {
            res.status(404).json({ result: err });
          } else {
            const jsonData = JSON.parse(data);
            const newLog = {
              date: "2021-05-20",
              data: "Writting in JSON file"
            };
            jsonData.push(newLog)
            data = JSON.stringify(jsonData, null, 2);
            fs.writeFile(file, data, (err) => {
              if (err) {
                res.status(404).json({ result: err });
              } else {
                res.status(200).json({ result: "Data written to file" });
              }
          });
          }
        });
      }
    });
  });

  return app;
};

export default files;
