import "/scss/main.scss";
import { toggleMenu, animateMenuIcon, cloud } from "/utilities.js";
import { name } from "@cloudinary/url-gen/actions/namedTransformation";

const nav = document.querySelector(".mobile-menu-button");
nav.addEventListener("click", toggleMenu);
nav.addEventListener("click", animateMenuIcon);

function open_email(email) {
    window.location.href = `mailto:${email}${String.fromCharCode(
        64
    )}${String.fromCharCode(103)}mail${String.fromCharCode(46)}com`;
}

const email_link = document.querySelector(".email-link");
email_link.addEventListener("click", function () {
    open_email("ryskdigital");
});
