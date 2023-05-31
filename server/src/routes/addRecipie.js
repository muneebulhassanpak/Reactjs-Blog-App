const express = require("express");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const router = express.Router();
const posts = require("../models/Post.js");
const { postModel } = posts;
const users = require("../models/user.js");
const { userModel } = users;
let myid;
router.post("/recipie", async (req, res) => {
  const { id, title, imgUrl, duration, description, likes } = req.body;
  myid = Math.random().toString();
  const user = await userModel.findByIdAndUpdate(
    id,
    {
      $push: {
        publishedRecipies: {
          title,
          imgUrl,
          duration,
          description,
          likes,
          myid,
        },
      },
    },
    { new: true }
  );
  const user2 = await postModel.findByIdAndUpdate(
    "6473076018cbb62dc32eeec0",
    {
      $push: {
        allRecipies: {
          title,
          imgUrl,
          duration,
          description,
          userid: id,
          likes,
          id: myid,
        },
      },
    },
    { new: true }
  );
  return res.json({
    message: "added",
    user,
    user2,
  });
});

router.post("/updatelikes", async (req, res) => {
  const { userid, recipieid } = req.body;
  console.log(userid, recipieid);
  const updatedUser = await userModel.findOneAndUpdate(
    { _id: new ObjectId(userid) },
    { $inc: { "publishedRecipies.$[recipie].likes": 1 } },
    {
      new: true,
      arrayFilters: [{ "recipie.myid": recipieid }],
    }
  );
  const check = await postModel.findOneAndUpdate(
    {
      _id: new ObjectId("6473076018cbb62dc32eeec0"),
      "allRecipies.id": recipieid,
    },
    { $inc: { "allRecipies.$.likes": 1 } },
    { new: true }
  );
  console.log(check);

  return res.json({
    updatedUser,
  });
});

module.exports = {
  addRecipieRouter: router,
};
