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
    .setSignature("GvJOB2PE")
    .toURL();

const amzUpholsteryThumb = document.querySelector(".amz-upholstery-thumb");
amzUpholsteryThumb.src = cloud
    .image("portfolio-images/amz_upholstery.jpg")
    .namedTransformation(name("square-thumb"))
    .setSignature("YZD-Cf8h")
    .toURL();

const concreteTilesThumb = document.querySelector(".concrete-tiles-thumb");
concreteTilesThumb.src = cloud
    .image("portfolio-images/concrete_tiles-8.jpg")
    .namedTransformation(name("square-thumb"))
    .setSignature("YZD-Cf8h")
    .toURL();

const concreteTilesThumb1 = document.querySelector(".concrete-tiles-thumb-1");
concreteTilesThumb1.src = cloud
    .image("portfolio-images/concrete_tiles-7.jpg")
    .namedTransformation(name("square-thumb"))
    .setSignature("YZD-Cf8h")
    .toURL();

const concreteTilesThumb2 = document.querySelector(".concrete-tiles-thumb-2");
concreteTilesThumb2.src = cloud
    .image("portfolio-images/concrete_tiles-6.jpg")
    .namedTransformation(name("square-thumb"))
    .setSignature("YZD-Cf8h")
    .toURL();
