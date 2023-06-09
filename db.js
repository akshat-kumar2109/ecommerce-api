const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(
      process.env.MONGODB_URI
    )
    .then(() => console.log("Connected to db"));
};

module.exports = connectToDB;
