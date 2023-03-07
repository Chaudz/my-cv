const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSkill = new Schema({
  nameSkill: {
    type: String,
  },
  percentSkill: {
    type: String,
  },
});

var SkillModel = mongoose.model("skill", userSkill);

module.exports = SkillModel;
