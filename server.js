const express = require("express");
const dotenv = require("dotenv");

const connectToDB = require("./db");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");

dotenv.config();
const server = express();
const PORT = process.env.PORT;

server.use(express.json());

server.use("/register", registerRoute);
server.use("/login", loginRoute);
server.get("/", (req, res) => res.json("Server running..."));

try {
  connectToDB();
  server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
} catch (error) {
  console.log(error);
}

module.exports = server;
