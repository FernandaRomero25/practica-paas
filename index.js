const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Practica PaaS funcionando en Heroku");
});

app.listen(process.env.PORT || 3000);
