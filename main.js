import "/scss/main.scss";
import { homepageImageUrls, toggleMenu } from "./constants";

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

setInterval(function () {
    swapHomepageImage(backgroundContainer);
}, 5000);

const nav = document.querySelector(".mobile-menu-button");
nav.addEventListener("click", toggleMenu);
// const nav = document.getElementById("nav-container");
// function slideIn() {
//     nav.animate(
//         [{ transform: "translateY(-100%)" }, { transform: "translateY(0%)" }],
//         {
//             duration: 3000,
//             iterations: 1,
//         }
//     );
// }
// nav.addEventListener("load", slideIn());

// console.log(nav.getAnimations());
