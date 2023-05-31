const express = require("express");
const router = express.Router();
const posts = require("../models/Post.js");
const { postModel } = posts;

router.post("/all-posts", async (req, res) => {
  const { id } = req.body;
  const allPosts = await postModel.findById(id);
  return res.json({
    allPosts,
  });
});

module.exports = {
  allPosts: router,
};
