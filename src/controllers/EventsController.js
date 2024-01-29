const Events = require("../models/Events");
const convertData = require("../utils/covertData");

class EventsController {
  index(req, res, next) {
    Events.find({})
      .then((data) => {
        return res.render("event", {
          respone: convertData(data),
        });
      })
      .catch((err) => {
        return res.render("not-found");
      });
  }
  create(req, res, next) {
    const { title, content, image, address, time } = req.body;
    console.log(req.body);
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
      return res.redirect("/events");
    } catch (err) {
      throw res.send(err);
    }
  }
  update(req, res, next) {
    console.log("da vao");
    const eventId = req.params.id;
    const { title, content, image, address, time } = req.body;
    console.log(req.body, eventId);

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
        return res.send("thanh cog");
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
    Events.findOne({ _id: isDeleteId })
      .then(async (item) => {
        var check = item.isDelete;
        await Events.updateOne({ _id: isDeleteId }, { isDelete: !check });
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
