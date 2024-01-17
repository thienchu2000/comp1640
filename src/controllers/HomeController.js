class HomeController {
  index(req, res, next) {
    res.send("Hello world");
  }
  search(req, res, next) {
    res.send("search");
  }
}

module.exports = new HomeController();
