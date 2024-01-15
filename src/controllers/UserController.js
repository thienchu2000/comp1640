class UserController {
  index(req, res, next) {
    res.send("Day la trang user");
  }

  profile(req, res, next) {
    res.send("day la trang profile");
  }

  email(req, res, next) {
    res.send("day la email cua profile");
  }
}

module.exports = new UserController();
