function changeBackgroundImage() {
    let slideElement = document.getElementsByClassName(
        "home-page-slide-block"
    )[0];
    let computedStyle = getComputedStyle(slideElement);
    let currentBackgroundImage =
        computedStyle.getPropertyValue("background-image");
    switch (true) {
        case currentBackgroundImage.includes("portfolio-images/homepage.jpg"):
            slideElement.classList.remove("slide1");
            slideElement.classList.add("slide2");
            break;
        case currentBackgroundImage.includes("portfolio-images/homepage-2.jpg"):
            slideElement.classList.remove("slide2");
            slideElement.classList.add("slide3");
            break;
        case currentBackgroundImage.includes("portfolio-images/homepage-3.jpg"):
            slideElement.classList.remove("slide3");
            slideElement.classList.add("slide4");
            break;
        case currentBackgroundImage.includes("portfolio-images/homepage-4.jpg"):
            slideElement.classList.remove("slide4");
            slideElement.classList.add("slide5");
            break;
        case currentBackgroundImage.includes("portfolio-images/homepage-5.jpg"):
            slideElement.classList.remove("slide5");
            slideElement.classList.add("slide1");
            break;
    }
}

function styleCurrentNavLink() {
    if (location.pathname == "/") {
        let homePageLink = document.getElementById("homeLink");
        homePageLink.classList.add("current-page");
    }
    let navLinks = document.getElementsByClassName("navigation-link");
    for (let item of navLinks) {
        if (location.pathname.includes("/" + item.getAttribute("href"))) {
            item.classList.add("current-page");
        }
    }
}

function displayNavigationMenu() {
    let navigationMenu = document.getElementById("navigation-menu");
    navigationMenu.classList.add("menu-open");
}

function hideNavigationMenu() {
    let navigationMenu = document.getElementById("navigation-menu");
    navigationMenu.classList.remove("menu-open");
}
