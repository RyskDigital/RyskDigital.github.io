import { Cloudinary } from "@cloudinary/url-gen";

export const cloud = new Cloudinary({ cloud: { cloudName: "ryskdigital" } });

export const homepageImageUrls = [
    cloud.image("portfolio-images/homepage.jpg").toURL(),
    cloud.image("portfolio-images/homepage-2.jpg").toURL(),
    cloud.image("portfolio-images/homepage-3.jpg").toURL(),
    cloud.image("portfolio-images/homepage-4.jpg").toURL(),
    cloud.image("portfolio-images/homepage-5.jpg").toURL(),
];