const menuBtn = document.querySelector("#menu-icon-btn");
const menuClose = document.querySelector(".menu-close");
const menuLinks = document.querySelector(".menu-links");
const skillsContainer = document.querySelector("#skills");

// skills
const skills = [
  { skill: "JavaScript", percent: 70 },
  { skill: "React", percent: 75 },
  { skill: "HTML", percent: 90 },
  { skill: "CSS", percent: 85 },
  { skill: "Node.js", percent: 65 },
  { skill: "Express.js", percent: 60 },
  { skill: "Firebase", percent: 70 },
  { skill: "Tailwind", percent: 85 },
];

menuBtn.addEventListener("click", () => {
  menuLinks.style.right = "0";
});
menuClose.addEventListener("click", () => {
  menuLinks.style.right = "-450px";
});

// skills

const skillsFunction = () => {
  const skillsString = skills
    .map(
      (skill) => `
      <div class="skill">
        <div class="skill-on" style="width: ${skill.percent}%">
          <h3>${skill.skill}</h3>
          <p>${skill.percent}%</p>
        </div>
        <div class="skill-percentage" style="width: ${skill.percent}%"></div>
        <div class="total-percentage"></div>
      </div>
    `
    )
    .join("");

  skillsContainer.innerHTML = skillsString;
};

skillsFunction();
