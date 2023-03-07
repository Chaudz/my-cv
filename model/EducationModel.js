const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var educationSchema = new Schema({
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

var EducationModel = mongoose.model("educations", educationSchema);
module.exports = EducationModel;
