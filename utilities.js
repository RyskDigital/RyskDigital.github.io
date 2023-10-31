import { Cloudinary } from "@cloudinary/url-gen";

export const cloud = new Cloudinary({ cloud: { cloudName: "ryskdigital" } });

export function animateMenuIcon() {
    const svg = document.querySelector(".mobile-menu-button");
    if (svg.dataset.menuState == "opened") {
        svg.dataset.menuState = "closed";
    } else {
        svg.dataset.menuState = "opened";
    }
}

export function toggleMenu() {
    const nav = document.querySelector("nav");
    if (nav.dataset.menuState == "opened") {
        nav.dataset.menuState = "closed";
    } else {
        nav.dataset.menuState = "opened";
    }
}
