const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./routes");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

route(app);

app.listen(3000, () => {
  db.connect((err) => {
    if (err) {
      console.log("Error connecting to database:", err);
    } else {
      console.log("Connected to database\n");
    }
  });
  console.log(`\nrun server http://localhost:3000`);
});
