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

app.listen(3000, async () => {
  console.log("\n");
  await db.connect();
  console.log(`run server http://localhost:3000`);
});
