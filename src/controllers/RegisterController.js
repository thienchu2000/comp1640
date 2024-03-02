const User = require("../models/User");
const convertData = require("../utils/covertData");
const bcrypt = require("bcrypt");

class RegisterController {
  index(req, res, next) {
    res.render("register");
  }

  async register(req, res, next) {
    const { name, email, password, role } = req.body;
    try {
      if (!name || !password || !email) {
        return res.send("dien day du du lieu");
      }
      const checkExist = await User.findOne({ email });
      if (checkExist) {
        return res.send("Email đã tồn tại");
      }
      if (password.length < 6) {
        return res.send("password khong duoc it hon 6 chu so");
      }
      if (!/[A-Z]/.test(password)) {
        return res.send("phai co it nhat 1 chu in hoa");
      }

      const hash = await bcrypt.hashSync(password, 10);
      const user = new User({
        name,
        email,
        password: hash,
        role,
      });
      user.save();
      res.render("login", { name });
    } catch (err) {
      throw res.send(err);
    }
  }
}
module.exports = new RegisterController();
