import { Cloudinary } from "@cloudinary/url-gen";

export const cloud = new Cloudinary({ cloud: { cloudName: "ryskdigital" } });

export const portfolioImageBasePath = "portfolio-images/";
export const jpgFileExtension = ".jpg";

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

export function populateProjectGallery(imageBaseName, elements, altText) {
    for (let index = 0; index < elements.length; index++) {
        let element = elements[index];
        let imagePath = portfolioImageBasePath;
        switch (index > 0) {
            case false:
                imagePath = `${imagePath}${imageBaseName}${jpgFileExtension}`;
                break;
            case true:
                imagePath = `${imagePath}${imageBaseName}-${
                    index + 1
                }${jpgFileExtension}`;
                break;
            default:
                break;
        }
        element.src = cloud.image(imagePath).toURL();
        element.alt = altText;
    }
}

export function getCloudinaryImageUrl(imageName) {
    return cloud.image(`${portfolioImageBasePath}${imageName}.jpg`).toURL();
}

export function updateProjectGallerySpan() {
    if (window.matchMedia("screen and (max-width: 1024px)").matches) {
        let imageElements = document.querySelectorAll("img");
        for (let index = 0; index < imageElements.length; index++) {
            const element = imageElements[index];
            if (element.dataset.projectGallerySpan == "2") {
                console.log("I got here");
                element.dataset.projectGallerySpan = "1";
            }
        }
    } else {
        let imageElements = document.querySelectorAll("img");
        for (let index = 0; index < imageElements.length; index++) {
            const element = imageElements[index];
            if (element.dataset.projectGallerySpan == "1") {
                console.log("I got here");
                element.dataset.projectGallerySpan = "2";
            }
        }
    }
}
