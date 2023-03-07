const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var education = new Schema({
  startdate: {
    type: Date,
  },
  enddate: {
    type: Date,
  },
  school: {
    type: String,
  },
  description: {
    type: String,
  },
});

var EducationModel = mongoose.model("education", education);
module.exports = EducationModel;
