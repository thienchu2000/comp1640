var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  throw res.send("Hello World!");
});

app.listen(3000, () => {
  console.log(`run server http://localhost:3000`);
});
