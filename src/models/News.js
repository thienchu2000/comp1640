var mongoose = require("mongoose");

const News = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  isDelete: Boolean,
  createdAt: Date,
});

module.exports = mongoose.model("News", News);
