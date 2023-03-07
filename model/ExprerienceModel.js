const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var experience = new Schema({
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

var ExperienceModel = mongoose.model("experience", experience);
module.exports = ExperienceModel;
