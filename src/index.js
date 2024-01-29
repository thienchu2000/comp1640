const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./routes");
const db = require("./config/db");
const { create } = require("express-handlebars");
const path = require("path");

const exphbs = create({
  extname: ".hbs",
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.engine("hbs", exphbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

route(app);

app.listen(3000, async () => {
  console.log("\n");
  await db.connect();
  console.log(`run server http://localhost:3000`);
});
