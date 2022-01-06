const { Router } = require("express");
const express = require("express");
const app = express();
const port = 3333;

app.use(express.json());

let data_app = ["Gabriel", "Matheus"];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const routes = Router();

routes.get("/api/app", (req, res) => {
  return res.json(data_app);
});
routes.post("/api/app", (req, res) => {
  const { data } = req.body;
  data_app.push(data);
  return res.json(data_app);
});

routes.delete("/api/app", (req, res) => {
  const { data } = req.body;
  data_app = data_app.filter((el) => el !== data);
  return res.json(data_app);
});

app.use(routes);

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
