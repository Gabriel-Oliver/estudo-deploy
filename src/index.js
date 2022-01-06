const { Router } = require("express");
const express = require("express");
const app = express();
const port = 3333;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});

const routes = Router();

routes.get("/api/app", (req, res) => {
  return res.json("Gabriel");
});
routes.post("/api/app", (req, res) => {
  const { data } = req.body;
  return res.json(data);
});
routes.put("/api/app", (req, res) => {
  const { data } = req.body;
  return res.json(`${data}-updated`);
});
routes.delete("/api/app", (req, res) => {
  const { data } = req.body;
  return res.json(`${data}-deleted`);
});

app.use(routes);
