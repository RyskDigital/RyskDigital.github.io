import "/scss/main.scss";
import { toggleMenu, animateMenuIcon, cloud } from "/utilities.js";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

const nav = document.querySelector(".mobile-menu-button");
nav.addEventListener("click", toggleMenu);
nav.addEventListener("click", animateMenuIcon);

const warAxeThumb = document.querySelector(".war-axe-thumb");
warAxeThumb.src = cloud
    .image("portfolio-images/skyrim_steel_war_axe.jpg")
    .namedTransformation(name("war-axe-thumb-1000"))
    .setSignature("0ynQv6Ve")
    .toURL();

const amzUpholsteryThumb = document.querySelector(".amz-upholstery-thumb");
amzUpholsteryThumb.src = cloud
    .image("portfolio-images/amz_upholstery.jpg")
    .namedTransformation(name("square-thumb-1000"))
    .setSignature("3fOyd2hx")
    .toURL();

const concreteTilesThumb = document.querySelector(".concrete-tiles-thumb");
concreteTilesThumb.src = cloud
    .image("portfolio-images/concrete_tiles-8.jpg")
    .namedTransformation(name("square-thumb-1000"))
    .setSignature("3fOyd2hx")
    .toURL();

const powerStationThumb = document.querySelector(".power-station-thumb");
powerStationThumb.src = cloud
    .image("portfolio-images/power_station.jpg")
    .namedTransformation(name("power-station-thumb-1000"))
    .setSignature("v42l8viR")
    .toURL();
