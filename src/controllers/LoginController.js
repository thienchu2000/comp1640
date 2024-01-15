class LoginController {
  index(req, res, next) {
    res.send("login");
  }
  byFB(req, res, next) {
    res.send("tam biet");
  }
}
module.exports = new LoginController();
