import "/scss/main.scss";
import { toggleMenu, animateMenuIcon, cloud } from "/utilities.js";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

const nav = document.querySelector(".mobile-menu-button");
nav.addEventListener("click", toggleMenu);
nav.addEventListener("click", animateMenuIcon);

const warAxeThumb = document.querySelector(".war-axe-thumb");
warAxeThumb.src = cloud
    .image("portfolio-images/skyrim_steel_war_axe.jpg")
    .namedTransformation(name("war-axe-thumb"))
    .setSignature("UtG8ouDt")
    .toURL();
