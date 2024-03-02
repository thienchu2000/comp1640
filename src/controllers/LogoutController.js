class LogoutController {
  index(req, res, next) {
    res.clearCookie("access_token");
    return res.redirect("/");
  }
}
module.exports = new LogoutController();
