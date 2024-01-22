const News = require("../models/News");

class NewsController {
  index(req, res, next) {
    res.send("news");
  }

  create(req, res, next) {
    const { title, content, image } = req.body;
    if (!title || !content || !image)
      return res.send("Please enter all information");

    try {
      const news = new News({
        title: title,
        content: content,
        image: image,
        createdAt: new Date(),
        isDelete: false,
      });
      news.save();
      return res.send("Created successfully");
    } catch (err) {
      return res.send("Errorrrrrrr");
    }
  }

  product(req, res, next) {
    res.send("product");
  }
  address(req, res, next) {
    res.send("adress");
  }
}
module.exports = new NewsController();
