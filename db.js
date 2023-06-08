const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://akshatkumar1999:G8J3Wp3N4LejFFu9@cluster0.zjis2gu.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected to db"));
};

module.exports = connectToDB;
