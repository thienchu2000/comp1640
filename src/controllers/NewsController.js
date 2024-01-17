class NewsController {
  index(req, res, next) {
    res.send("news");
  }
  product(req, res, next) {
    res.send("product");
  }
  adress(req, res, next) {
    res.send("adress");
  }
}
module.exports = new NewsController();
