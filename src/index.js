const hamburgerMenu = document.getElementById("open-menu");
const menuClose = document.getElementById("close-menu");
const sidebar = document.getElementById("side-bar");
const techs = document.getElementById("techs");
const projectLists = document.getElementById("project-list");

const technologies = [
  {
    name: "Typescript",
    image: "./assets/ts.svg",
  },
  {
    name: "Javascript",
    image: "./assets/js.svg",
  },
  {
    name: "React JS",
    image: "./assets/react.jpg",
  },
  {
    name: "Next JS",
    image: "./assets/next.svg",
  },
  {
    name: "NodeJS",
    image: "./assets/node.svg",
  },
  {
    name: "Express",
    image: "./assets/express.svg",
  },
  {
    name: "Mongo DB",
    image: "./assets/mongodb.svg",
  },
  {
    name: "HTML",
    image: "./assets/html.svg",
  },
  {
    name: "CSS",
    image: "./assets/css.svg",
  },
  {
    name: "SCSS",
    image: "./assets/sass.svg",
  },
  {
    name: "Git",
    image: "./assets/git.svg",
  },
  {
    name: "Firebase",
    image: "./assets/firebase.svg",
  },
];
const projects = [
  {
    name: "Real Music",
    image: "./assets/Real-Music.png",
    github: "https://github.com/oficial-rilwan/Real-Music-Frontend",
    link: "https://realmusicapp.netlify.app",
    description:
      "Real Music is a digital music service that gives you access to millions of songs and other content from creators all over the world.",
    technologies: [
      {
        name: "Typescript",
        image: "./assets/ts.svg",
      },
      {
        name: "React JS",
        image: "./assets/react.jpg",
      },
      {
        name: "NodeJS",
        image: "./assets/node.svg",
      },
      {
        name: "Express",
        image: "./assets/express.svg",
      },
      {
        name: "Mongo DB",
        image: "./assets/mongodb.svg",
      },
      {
        name: "Firebase",
        image: "./assets/firebase.svg",
      },
    ],
  },
  {
    name: "Real Expense Tracker",
    link: "https://realexpensetracker.netlify.app",
    github: "https://github.com/oficial-rilwan/Real-Expense-Tracker",
    image: "./assets/Real-Expense.png",
    description:
      "Real Expense Tracker is an incredibly useful and practical financial tool. The main purpose of the app, is to identify where you are spending your money, and from there, you can identify ways or opportunities to save or invest more of your money and reduce your cost of living.",
    technologies: [
      {
        name: "Typescript",
        image: "./assets/ts.svg",
      },
      {
        name: "React JS",
        image: "./assets/react.jpg",
      },
      {
        name: "NodeJS",
        image: "./assets/node.svg",
      },
      {
        name: "Express",
        image: "./assets/express.svg",
      },
      {
        name: "Mongo DB",
        image: "./assets/mongodb.svg",
      },
    ],
  },
  {
    name: "Fiber Landing Page",
    image: "./assets/fiber.png",
    link: "https://fiber-lpage.netlify.app",
    github: "https://github.com/oficial-rilwan/FiberWebsite",
    description: "A simple landing page",
    technologies: [
      {
        name: "HTML",
        image: "./assets/html.svg",
      },
      {
        name: "CSS",
        image: "./assets/css.svg",
      },
      {
        name: "Javascript",
        image: "./assets/js.svg",
      },
    ],
  },
];

technologies.forEach((tech) => {
  const techItem = document.createElement("div");
  const img = document.createElement("img");
  techItem.classList.add("tech-item");
  img.src = tech.image;
  img.alt = tech.name;
  techItem.appendChild(img);
  techs.appendChild(techItem);
});

projects.forEach((project) => {
  const div_project = document.createElement("div");
  div_project.classList.add("project");

  const div_img_wrapper = document.createElement("div");
  const div_img = document.createElement("img");

  div_img.src = project.image;
  div_img.alt = project.name;
  div_img_wrapper.appendChild(div_img);

  const div_content = document.createElement("div");
  const div_content_h4 = document.createElement("h4");
  const div_content_p = document.createElement("p");
  const div_content_small = document.createElement("small");
  const div_content_small_span = document.createElement("span");
  div_content.classList.add("content");

  div_content_h4.textContent = project.name;
  div_content_p.textContent = project.description;
  div_content_small.textContent = "Design By: ";
  div_content_small_span.textContent = "Rilwan Aribidesi";
  div_content_small.appendChild(div_content_small_span);

  const div_actions = document.createElement("div");
  const div_actions_btn = document.createElement("button");
  const div_actions_link = document.createElement("a");
  div_actions_link.target = "_blank";

  div_actions_btn.textContent = "Preview";
  div_actions_link.href = project.link;
  div_actions_link.textContent = "View Site";

  div_actions.classList.add("actions");
  div_actions.appendChild(div_actions_btn);
  div_actions.appendChild(div_actions_link);

  div_content.appendChild(div_content_h4);
  div_content.appendChild(div_content_p);
  div_content.appendChild(div_content_small);
  div_content.appendChild(div_actions);

  div_project.appendChild(div_img_wrapper);
  div_project.appendChild(div_content);

  projectLists.appendChild(div_project);
});

const dateField = document.getElementById("date");
let date = new Date().getFullYear();
dateField.textContent = date;

const nav_links = [
  document.getElementById("#home"),
  document.getElementById("#technologies"),
  document.getElementById("#projects"),
  document.getElementById("#contact"),
];

nav_links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

hamburgerMenu.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

function openMenu() {
  sidebar.classList.add("open-menu");
}
function closeMenu() {
  sidebar.classList.remove("open-menu");
}
