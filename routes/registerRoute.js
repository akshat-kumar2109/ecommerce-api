const express = require("express");
const router = express.Router();

const { register } = require("../controller/register");
// const app = require("../server.js")

// app.post("/user/create", register)

router.route("/").post(register);

module.exports = router;
