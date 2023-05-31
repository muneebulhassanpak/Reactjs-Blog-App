const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  allRecipies: [
    {
      title: {
        type: String,
        required: true,
      },
      imgUrl: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      userid: {
        type: String,
      },
      likes: {
        type: Number,
        required: true,
        default: 0,
      },
      id: {
        type: String,
        required: true,
      },
    },
  ],
});
const postModel = mongoose.model("posts", postSchema);

module.exports = {
  postModel: postModel,
};
