const homeRoute = require("./homeRoute");
const userRoute = require("./userRoute");
const loginRoute = require("./loginRoute");

function route(app) {
  app.use("/login", loginRoute);
  app.use("/user", userRoute);
  app.use("/", homeRoute);
}

module.exports = route;
