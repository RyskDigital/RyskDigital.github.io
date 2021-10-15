function changeBackgroundImage() {
    let slideElement = document.getElementsByClassName("homePageSlideBlock")[0];
    let computedStyle = getComputedStyle(slideElement);
    let currentBackgroundImage =
        computedStyle.getPropertyValue("background-image");
    console.log(currentBackgroundImage);
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
    let navLinks = document.getElementsByClassName("sideBarNavLink");
    for (let item of navLinks) {
        if ("/" + item.getAttribute("href") == location.pathname) {
            item.classList.add("currentPage");
        }
    }
}
