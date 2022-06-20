import Swiper from "swiper"

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-news-wrapper", {
    direction: "horizontal",
    slidesPerView: "auto",
    loop: true,
  })
})
