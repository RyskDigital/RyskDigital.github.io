function changeBackgroundImage() {
    let slideElement = document.getElementsByClassName(
        "home-page-slide-block"
    )[0];
    let computedStyle = getComputedStyle(slideElement);
    let currentBackgroundImage =
        computedStyle.getPropertyValue("background-image");
    switch (true) {
        case currentBackgroundImage.includes("images/Homepage_Screen_01.jpg"):
            slideElement.classList.remove("slide1");
            slideElement.classList.add("slide2");
            break;
        case currentBackgroundImage.includes("images/Homepage_Screen_02.jpg"):
            slideElement.classList.remove("slide2");
            slideElement.classList.add("slide3");
            break;
        case currentBackgroundImage.includes("images/Homepage_Screen_03.jpg"):
            slideElement.classList.remove("slide3");
            slideElement.classList.add("slide4");
            break;
        case currentBackgroundImage.includes("images/Homepage_Screen_04.jpg"):
            slideElement.classList.remove("slide4");
            slideElement.classList.add("slide5");
            break;
        case currentBackgroundImage.includes("images/Homepage_Screen_05.jpg"):
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

function contact(url) {
    window.location.href = `mailto:${url}${String.fromCharCode(
        64
    )}${String.fromCharCode(103)}mail${String.fromCharCode(46)}com`;
}
