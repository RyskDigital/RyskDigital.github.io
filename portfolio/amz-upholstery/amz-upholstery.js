import "/scss/main.scss";
import {
    toggleMenu,
    animateMenuIcon,
    populateProjectGallery,
    getCloudinaryImageUrl,
    updateProjectGallerySpan,
} from "/utilities.js";

const nav = document.querySelector(".mobile-menu-button");
nav.addEventListener("click", toggleMenu);
nav.addEventListener("click", animateMenuIcon);

window.addEventListener("resize", updateProjectGallerySpan);

const imageList = document.querySelectorAll(".project-gallery > img");
populateProjectGallery(
    "amz_upholstery",
    imageList,
    "Amazon Upholstery Gallery Image"
);

const heroImages = document.querySelectorAll(".project-hero > img");
for (let index = 0; index < heroImages.length; index++) {
    const element = heroImages[index];
    switch (index) {
        case 0:
            element.src = getCloudinaryImageUrl("amz_upholstery");
            element.alt = "Amazon Upholstery Hero Image One";
            break;
        case 1:
            element.src = getCloudinaryImageUrl("amz_upholstery-5");
            element.alt = "Amazon Upholstery Hero Image Two";
            break;
        default:
            break;
    }
}
