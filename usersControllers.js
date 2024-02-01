const express = require("express");

const userData = require("./data.json");

const controller = express.Router();

controller.get("/", (req, res) => {
  const { limit } = req.query;
  const { students } = userData;
  if (!limit) {
    res.send(students);
  }
  const studentsWithLimit = students.slice(0, Number(limit));
  res.send(studentsWithLimit);
});

controller.get("/:id", (req, res) => {
  const { students } = userData;

  const foundStudent = students.find((student) => req.params.id === student.id);

  res.send(foundStudent);
});

controller.get("/capitalStudentName/:id", (req, res) => {
  const { students } = userData;
  const foundStudent = students.find((student) => req.params.id === student.id);

  const capitalStudentName = `${foundStudent.firstName.toUpperCase()}${foundStudent.lastName.toUpperCase()}`;
  res.send(capitalStudentName);
});

module.exports = controller;
