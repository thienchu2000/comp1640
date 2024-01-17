class LogoutController {
  index(req, res, next) {
    res.send("logout");
  }
}
module.exports = new LogoutController();
