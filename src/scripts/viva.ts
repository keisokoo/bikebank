import Swiper, { Navigation } from "swiper"

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-describe-one", {
    direction: "horizontal",
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-describe-one>.slide-control-btn.next",
      prevEl: ".swiper-describe-one>.slide-control-btn.prev",
    },
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: false,
    centeredSlides: true,
    breakpoints: {
      300: {
        spaceBetween: 8,
      },
      640: {
        spaceBetween: 30,
      },
      1048: {
        spaceBetween: 96,
      },
    },
  })
})
