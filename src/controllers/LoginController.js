const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class LoginController {
  index(req, res, next) {
    res.render("login");
  }
  async login(req, res, next) {
    const { name, password } = req.body;

    if (!name || !password) {
      return "ban can nhap day du thong tin";
    }

    const checkName = await User.findOne({ name });
    if (!checkName) {
      return "tai khoan khong ton tai";
    }

    const user = await User.findOne({ name });

    bcrypt.compare(password, user.password, function (err, result) {
      var token = jwt.sign(
        { name: user.name, email: user.email, role: user.role },
        "shhhh"
      );
      res.cookie("access_token", token);
      res.redirect("/");
    });
  }
}
module.exports = new LoginController();
