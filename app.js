const express = require("express");
const app = express();
const usersController = require("./usersControllers");

app.get("/", (req, res) => {
  res.send("This is an app my dude.");
});

//create controller

app.use("/users", usersController);

module.exports = app;
