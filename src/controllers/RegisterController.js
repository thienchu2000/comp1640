class RegisterController {
  index(req, res, next) {
    res.send("register");
  }
}
module.exports = new RegisterController();
