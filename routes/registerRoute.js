const express = require("express");
const router = express.Router();

const { register } = require("../controller/register");

router.route("/").post(register);

module.exports = router;
