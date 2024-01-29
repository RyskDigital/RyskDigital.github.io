import "/scss/main.scss";
import {
    toggleMenu,
    animateMenuIcon,
    populateProjectGallery,
    getCloudinaryImageUrl,
} from "/utilities.js";

const nav = document.querySelector(".mobile-menu-button");
nav.addEventListener("click", toggleMenu);
nav.addEventListener("click", animateMenuIcon);

const imageList = document.querySelectorAll(".project-gallery > img");
populateProjectGallery(
    "skyrim_steel_war_axe",
    imageList,
    "Skyrim Steel War Axe Gallery Image"
);

const heroImage = document.querySelector(".project-hero > img");
heroImage.src = getCloudinaryImageUrl("skyrim_steel_war_axe");
heroImage.alt = "Skyrim Steel War Axe Hero Image";
