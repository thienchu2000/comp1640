var mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:admin@cluster.km6q8xh.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  mongoose.connect(uri, {});

  mongoose.connection
    .once("open", () => {
      console.log("Database connected!");
    })
    .on("error", () => {
      console.log("Database failed !!!");
    });
}

module.exports = { connect };
