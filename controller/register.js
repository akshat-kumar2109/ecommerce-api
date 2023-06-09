const express = require("express");
const bcrypt = require("bcrypt");

const UserSchema = require("../model/userModel.js");

exports.register = async (req, res) => {
  const { fullName, password, email, phone } = req.body;

  const user = await UserSchema.findOne({ email });
  if (user) {
    res.status(403).json({
      success: false,
      message: "User already exist!",
    });

    return;
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newuser = await UserSchema.create({
    fullName,
    password: hashedPassword,
    email,
    phone,
  });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.status(201).json({
    success: true,
    message: "Registration successful!",
    token,
    user: newuser,
  });
};
