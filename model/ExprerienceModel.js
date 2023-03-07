const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var exprerience = new Schema({
  startdate: {
    type: Date,
  },
  enddate: {
    type: Date,
  },
  company: {
    type: String,
  },
  description: {
    type: String,
  },
});

var ExprerienceModel = mongoose.model("exprerience", exprerience);
module.exports = ExprerienceModel;
