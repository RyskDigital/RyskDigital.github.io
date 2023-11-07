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
    "power_station",
    imageList,
    "Sci-FI Power Station Gallery Image"
);

const heroImage = document.querySelector(".project-hero > img");
heroImage.src = getCloudinaryImageUrl("power_station");
heroImage.alt = "Sci-FI Power Station Hero Image";
