function changeBackgroundImage() {
    let slideElement = document.getElementsByClassName("mainPageSlides")[0];
    let computedStyle = getComputedStyle(slideElement);
    let currentBackgroundImage =
        computedStyle.getPropertyValue("background-image");
    switch (true) {
        case currentBackgroundImage.includes("images/Homepage_Screen_01.jpg"):
            slideElement.style.backgroundImage =
                "url(images/Homepage_Screen_02.jpg)";
            break;
        case currentBackgroundImage.includes("images/Homepage_Screen_02.jpg"):
            slideElement.style.backgroundImage =
                "url(images/Homepage_Screen_03.jpg)";
            break;
        case currentBackgroundImage.includes("images/Homepage_Screen_03.jpg"):
            slideElement.style.backgroundImage =
                "url(images/Homepage_Screen_04.jpg)";
            break;
        case currentBackgroundImage.includes("images/Homepage_Screen_04.jpg"):
            slideElement.style.backgroundImage =
                "url(images/Homepage_Screen_05.jpg)";
            break;
        case currentBackgroundImage.includes("images/Homepage_Screen_05.jpg"):
            slideElement.style.backgroundImage =
                "url(images/Homepage_Screen_01.jpg)";
            break;
    }
}
function styleCurrentNavLink() {
    let navLinks = document.getElementsByClassName("sidebarNavLink");
    for (let item of navLinks) {
        if ("/" + item.getAttribute("href") == location.pathname) {
            item.classList.add("current");
        }
        console.log(item.getAttribute("href"));
        console.log(location.pathname);
    }
}
