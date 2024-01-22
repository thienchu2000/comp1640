var mongoose = require("mongoose");

const Events = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  isDelete: Boolean,
  createdAt: Date,
  address: String,
  time: Date,
});

module.exports = mongoose.model("Events", Events);
