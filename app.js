const express = require("express");
const app = express();
const usersController = require("./usersControllers");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("This is an app my dude.");
});

app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.header("Access-control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (request, response) => {
  response.send("This is an app my friend.");
});

//create controller

app.use("/users", usersController);

module.exports = app;
