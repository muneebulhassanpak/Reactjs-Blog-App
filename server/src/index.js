const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/users.js");
const storeRoutes = require("./routes/store.js");
const recipieRoutes = require("./routes/addRecipie.js");
const postRoutes = require("./routes/allPosts.js");
// app.get("/auth", userRoutes.userRouter);

const app = express();

app.use(express.json()); // Parsing post data to json form to make it useable
app.use(cors()); // Handling inter port connectivity between frontend and backend

mongoose
  .connect(
    "mongodb+srv://muneebulhassan121:xvAPGviCMJYgs1hh@recipies.qf29npw.mongodb.net/recipies"
  )
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("error");
  });

app.use("/auth", userRoutes.userRouter);
app.use("/user", storeRoutes.storeRouter);
app.use("/user/add", recipieRoutes.addRecipieRouter);
app.use("/posts", postRoutes.allPosts);

app.listen(3001, () => {
  console.log("Server Started");
});
