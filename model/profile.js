const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var profile = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  job: {
    type: String,
  },
  address: {
    type: String,
  },
  web: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
});

var CommentModel = mongoose.model("profile", profile);

module.exports = CommentModel;
