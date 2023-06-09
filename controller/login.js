const UserSchema = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserSchema.findOne({ email });
  if (!user) {
    res.status(404).json({
      success: false,
      message: "User not found, please register first!",
    });

    return;
  }

  const match = bcrypt.compare(password, user.password);
  if (!match) {
    res.status(401).json({
      success: false,
      message: "Wrong credentials!",
    });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.status(200).json({
    success: true,
    message: "Login successful!",
    token,
  });
};
