const express = require("express");

const { userLogin } = require("../controller/login");

const router = express.Router();

router.route("/").post(userLogin);

module.exports = router;
