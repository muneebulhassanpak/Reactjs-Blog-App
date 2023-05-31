const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const users = require("../models/user.js");
const { userModel } = users;
const ObjectId = mongoose.Types.ObjectId;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/logout", async (req, res, next) => {
  const { id } = req.body;
  const response = await userModel.findByIdAndUpdate(id, { loggedIn: false });
  const updatedResult = await userModel.findById(id);
  if (updatedResult.loggedIn == false) {
    return res.json({
      response,
      loginInfo: "inverted",
    });
  } else {
    return res.json({
      response,
      loginInfo: "notinverted",
    });
  }
});

router.post("/register", async (req, res, next) => {
  const { fullname, username, password, loggedIn } = req.body;
  const user = await userModel.findOne({ username: username });
  if (user) {
    return res.json({
      message: "User already exists",
    });
  } else {
    const newPass = await bcrypt.hash(password, 10);
    const user = new userModel({
      fullname,
      username,
      password: newPass,
      loggedIn: false,
    });
    const savedUser = await user.save();
    if (savedUser) {
      return res.json({
        message: "User Created Successfully",
      });
    } else {
      return res.json({
        message: "Something went wrong",
      });
    }
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username: username });
  if (!user) {
    return res.json({
      message: "User doesn't exist",
    });
  }
  const pass = await bcrypt.compare(password, user.password);
  const userId = user._id.toString();
  if (pass) {
    let response = await userModel.findByIdAndUpdate(
      userId,
      {
        loggedIn: true,
      },
      { new: true }
    );
    if (response.loggedIn == true) {
      const token = jwt.sign({ id: user._id }, "secret");
      return res.json({
        token,
        userID: userId,
        loggedIn: response.loggedIn,
      });
    } else {
      return res.json({
        response,
        loginInfo: "notinverted",
      });
    }
  }
});
router.get("/register", async (req, res, next) => {
  res.send("<p>yrd</p>");
});

module.exports = {
  userRouter: router,
};
