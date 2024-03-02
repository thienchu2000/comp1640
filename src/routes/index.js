const homeRoute = require("./homeRoute");
const userRoute = require("./userRoute");
const loginRoute = require("./loginRoute");
const newsRoute = require("./newsRoute");
const logoutRoute = require("./logoutRoute");
const registerRoute = require("./registerRoute");
const eventsRoute = require("./eventsRoute");
const checkLogin = require("../utils/checkLogin");
const { isAdmin } = require("../utils/authorize");

function route(app) {
  app.use("/events", eventsRoute);
  app.use("/news", newsRoute);
  app.use("/logout", logoutRoute);
  app.use("/register", checkLogin, registerRoute);
  app.use("/login", loginRoute);
  app.use("/user", checkLogin, userRoute);
  app.use("/", checkLogin, homeRoute);
}

module.exports = route;
