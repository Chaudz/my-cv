let btnChangeColor = document.querySelector(".btn-change");
let btnChageLeft = document.querySelector(".btn-change .left");
let btnChageRight = document.querySelector(".btn-change .right");
let leftContent = document.querySelector(".left-content");
let mainContent = document.querySelector(".main-content");
let navHome = document.querySelector(".nav-home");
let navEducation = document.querySelector(".nav-education");
let navSkill = document.querySelector(".nav-skill");
let navExperience = document.querySelector(".nav-experience");
let pageHome = document.querySelector(".home");
let pageEducation = document.querySelector(".education");
let pageSkill = document.querySelector(".skill");
let pageExperience = document.querySelector(".experience");
let body = document.body;
console.log(btnChageLeft);
console.log(btnChangeColor);
let isChangeColor = false;
btnChangeColor.onclick = () => {
  if (!isChangeColor) {
    btnChageLeft.style.display = "none";
    btnChageRight.style.display = "block";
    body.style.color = "#fff";
    body.style.background = "#000";
    leftContent.style.background = "#000";
    mainContent.style.background = "#000";
    isChangeColor = true;
  } else {
    btnChageLeft.style.display = "block";
    btnChageRight.style.display = "none";
    body.style.color = "#000";
    body.style.background = "#fff";
    leftContent.style.background = "#fff";
    mainContent.style.background = "#fff";
    isChangeColor = false;
  }
};
function resetNav() {
  pageHome.style.display = "none";
  pageEducation.style.display = "none";
  pageSkill.style.display = "none";
  pageExperience.style.display = "none";
}
navHome.onclick = () => {
  window.history.pushState("object or string", "Title", "/");
  resetNav();
  pageHome.style.display = "block";
};

navEducation.onclick = () => {
  window.history.pushState("object or string", "Title", "education");
  resetNav();
  pageEducation.style.display = "block";
};
navSkill.onclick = () => {
  window.history.pushState("object or string", "Title", "skill");
  resetNav();
  pageSkill.style.display = "block";
};
navExperience.onclick = () => {
  window.history.pushState("object or string", "Title", "experience");
  resetNav();
  pageExperience.style.display = "block";
};
