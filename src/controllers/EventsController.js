const Events = require("../models/Events");

class EventsController {
  index(req, res, next) {
    Events.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send("Loi tim kiem");
      });
  }
  create(req, res, next) {
    const { title, content, image, address, time } = req.body;
    if (!title || !content || !image || !address || !time) {
      return res.send("dien du thong tin");
    }
    try {
      const events = new Events({
        title,
        content,
        image,
        createdAt: new Date(),
        isDelete: false,
        address,
        time,
      });
      events.save();
      return res.send("them thanh cong ");
    } catch (err) {
      throw res.send(err);
    }
  }
  update(req, res, next) {
    const eventId = req.params.id;
    const { title, content, image, address, time } = req.body;

    Events.findOneAndUpdate(
      { _id: eventId },
      {
        title,
        content,
        image,
        address,
        time,
      }
    )
      .then(() => {
        return res.send("Update successful");
      })
      .catch((err) => {
        console.error(err);
        return res.send("Update failed");
      });
  }
  delete(req, res, next) {
    const deleteId = req.params.deleteId;
    Events.deleteOne({ _id: deleteId })

      .then(() => {
        return res.send("done");
      })
      .catch((err) => {
        return res.send("error");
      });
  }
  isDelete(req, res, next) {
    const isDeleteId = req.params.isDeleteId;
    Events.updateOne({ _id: isDeleteId }, { isDelete: true })
      .then(() => {
        return res.send("done");
      })
      .catch((err) => {
        return res.send("error");
      });
  }
  checkDelete(req, res, next) {
    Events.find({ isDelete: true })
      .then((item) => {
        res.send(item);
      })
      .catch((err) => {
        return res.send("error");
      });
  }
}
module.exports = new EventsController();
