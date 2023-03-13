const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: /.+\@.+\..+/,
      unique: true,
      required: true,
    },
    userImg: {
      type: String,
    },
    role: {
      type: String,
      default: "basic",
      enum: ["basic", "admin"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("user", userSchema);
