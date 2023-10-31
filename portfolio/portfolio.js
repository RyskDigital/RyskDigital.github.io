import "/scss/main.scss";
import { toggleMenu, animateMenuIcon } from "/utilities.js";

const nav = document.querySelector(".mobile-menu-button");
nav.addEventListener("click", toggleMenu);
nav.addEventListener("click", animateMenuIcon);
