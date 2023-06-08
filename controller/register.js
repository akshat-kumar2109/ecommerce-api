const express = require("express");
const mongoose = require("mongoose");
const UserSchema = require("../model/userModel.js");

exports.register = async (req, res) => {
  const { fullName, password, email, phone } = req.body;

  const newuser = await UserSchema.create({
    fullName,
    password,
    email,
    phone,
  });

  res.sendStatus(201).json({
    success: true,
    user: newuser,
  });
};
