let Education = require("../model/EducationModel");
let Experience = require("../model/ExprerienceModel");
let Profile = require("../model/ProfileModel");
let Skill = require("../model/SkillModel");

async function index(req, res) {
  let skills = await Skill.find();
  let education = await Education.findOne();
  let profile = await Profile.findOne();
  let experience = await Experience.findOne();
  console.log(skills);
  res.render("index", {
    title: "MyCv",
    skills: skills,
    education: education,
    profile: profile,
    experience: experience,
  });
}
module.exports = {
  index,
};
