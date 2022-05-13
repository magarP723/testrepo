var express = require("express");
var app = express();

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

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
