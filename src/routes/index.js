const homeRoute = require("./homeRoute");
const userRoute = require("./userRoute");
const loginRoute = require("./loginRoute");
const newsRoute = require("./newsRoute");
const logoutRoute = require("./logoutRoute");
const registerRoute = require("./registerRoute");
const eventsRoute = require("./eventsRoute");

function route(app) {
  app.use("/events", eventsRoute);
  app.use("/news", newsRoute);
  app.use("/logout", logoutRoute);
  app.use("/register", registerRoute);
  app.use("/login", loginRoute);
  app.use("/user", userRoute);
  app.use("/", homeRoute);
}

module.exports = route;
