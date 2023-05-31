const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  loggedIn: {
    type: Boolean,
  },
  publishedRecipies: [
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
      likes: {
        type: Number,
        default: 0,
      },
      myid: {
        type: String,
        required: true,
      },
    },
  ],
});
const userModel = mongoose.model("users", userSchema);

module.exports = {
  userModel: userModel,
};
