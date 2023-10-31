import "/scss/main.scss";
import { toggleMenu, animateMenuIcon, cloud } from "/utilities.js";

const homepageImageUrls = [
    cloud.image("portfolio-images/homepage.jpg").toURL(),
    cloud.image("portfolio-images/homepage-2.jpg").toURL(),
    cloud.image("portfolio-images/homepage-3.jpg").toURL(),
    cloud.image("portfolio-images/homepage-4.jpg").toURL(),
    cloud.image("portfolio-images/homepage-5.jpg").toURL(),
];

function swapHomepageImage(element) {
    if (element.classList.contains("homepage-1")) {
        element.classList.toggle("homepage-1");
        element.classList.toggle("homepage-2");
        element.style.backgroundImage = `url(${homepageImageUrls[1]})`;
        return;
    }
    if (element.classList.contains("homepage-2")) {
        element.classList.toggle("homepage-2");
        element.classList.toggle("homepage-3");
        element.style.backgroundImage = `url(${homepageImageUrls[2]})`;
        return;
    }
    if (element.classList.contains("homepage-3")) {
        element.classList.toggle("homepage-3");
        element.classList.toggle("homepage-4");
        element.style.backgroundImage = `url(${homepageImageUrls[3]})`;
        return;
    }
    if (element.classList.contains("homepage-4")) {
        element.classList.toggle("homepage-4");
        element.classList.toggle("homepage-5");
        element.style.backgroundImage = `url(${homepageImageUrls[4]})`;
        return;
    }
    if (element.classList.contains("homepage-5")) {
        element.classList.toggle("homepage-5");
        element.classList.toggle("homepage-1");
        element.style.backgroundImage = `url(${homepageImageUrls[0]})`;
        return;
    }
}

for (let index = 0; index < homepageImageUrls.length; index++) {
    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.href = homepageImageUrls[index];
    preload.as = "image";
    preload.type = "image/jpeg";
    document.head.appendChild(preload);
}

const backgroundContainer = document.querySelector(".background-container");
backgroundContainer.style.backgroundImage = `url(${homepageImageUrls[0]})`;

setInterval(swapHomepageImage, 5000, backgroundContainer);

const nav = document.querySelector(".mobile-menu-button");
nav.addEventListener("click", toggleMenu);
nav.addEventListener("click", animateMenuIcon);
