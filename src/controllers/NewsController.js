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

  update(req, res, next) {
    const id = req.params.id;
    const { title, content, image, address, time } = req.body;
    if (!title || !content || !image) {
      return res.send("ban can dien day du thong tin");
    }
    News.findOneAndUpdate(
      { _id: id },
      {
        title,
        content,
        image,
      }
    )
      .then(() => {
        res.send("bạn đã thay đổi thành công");
      })
      .catch((err) => {
        return res.send("Error");
      });
  }
  isDelete(req, res, next) {
    const id = req.params.id;
    News.updateOne(
      { _id: id },
      {
        isDelete: true,
      }
    )
      .then(() => {
        res.send("tai khoan cua ban duoc xoa");
      })
      .catch((err) => {
        return res.send("Error");
      });
  }
  createDay(req, res, next) {
    News.find({})
      .then((data) => {
        var day = data.filter((item) => {
          if (item.createdAt.getFullYear() === 2024) {
            return item;
          }
        });
        res.send(day);
      })
      .catch((err) => {
        return res.send("Error");
      });
  }
}
module.exports = new NewsController();
