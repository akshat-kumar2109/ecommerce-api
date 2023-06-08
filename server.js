const express = require("express");
const connectToDB = require("./db");
const registerRoute = require("./routes/registerRoute");

const server = express();
const PORT = "5000";

server.use(express.json())
server.use("/register", registerRoute);
server.get("/", (req, res) => res.json("Server running..."));

try {
  connectToDB();
  server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
} catch (error) {
  console.log(error);
}

module.exports = server;
