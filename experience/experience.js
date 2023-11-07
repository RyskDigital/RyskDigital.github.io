import "/scss/main.scss";
import { toggleMenu, animateMenuIcon, cloud } from "/utilities.js";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

const nav = document.querySelector(".mobile-menu-button");
nav.addEventListener("click", toggleMenu);
nav.addEventListener("click", animateMenuIcon);
