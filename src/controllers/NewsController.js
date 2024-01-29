const News = require("../models/News");
const convertData = require("../utils/covertData");

class NewsController {
  index(req, res, next) {
    News.find().then((data) => {
      return res.render("new", {
        data: convertData(data),
      });
    });
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
      // return res.send("Created successfully");
      return res.redirect("/news");
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
        res.send({ thongbao: "bạn đã thay đổi thành công" });
        // return res.redirect("/news");
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
  delete(req, res, next) {
    const deleteId = req.params.deleteId;
    News.deleteOne({ _id: deleteId })

      .then(() => {
        return res.send("done");
      })
      .catch((err) => {
        return res.send("error");
      });
  }
}
module.exports = new NewsController();
