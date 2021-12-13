const express = require('express'),
app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.get("/home", (req, res) => {
  res.json({msg: "Bem vindo"});
});

module.exports = app;