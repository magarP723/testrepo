var express = require("express");
var app = express();
//Hello world multiple edit on the local repo
//3 endpoints are there for now
const id = [
  { id: 42, name: "Prabesh Magar" },
  { id: 45, name: "Roshan Adhikari" },
];

app.get("/", (req, res) => {
  res.send("Basic Program");
});

app.get("/id", (req, res) => {
  res.json(id);
});

app.get("/action", (req, res) => {
  res.send("What is my acton");
});

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
