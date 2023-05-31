const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const users = require("../models/user.js");
const { userModel } = users;

router.post("/getStore", async (req, res, next) => {
  const { id } = req.body;
  const user = await userModel.findOne({ _id: new ObjectId(id) });
  console.log(user);
  if (user) {
    const loginStatus = user.loggedIn;
    if (loginStatus) {
      return res.json({
        loginStatus,
      });
    } else {
      return res.json({
        loginStatus,
      });
    }
  }
});

module.exports = {
  storeRouter: router,
};
