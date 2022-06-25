import Swiper, { Navigation } from "swiper"

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-describe-one", {
    direction: "horizontal",
    modules: [Navigation],
    navigation: {
      nextEl: ".slide-control-btn.next",
      prevEl: ".slide-control-btn.prev",
    },
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: false,
    centeredSlides: true,
    breakpoints: {
      100: {
        centeredSlides: false,
        spaceBetween: 32,
      },
      768: {
        centeredSlides: false,
        spaceBetween: 32,
      },
      1180: {
        centeredSlides: true,
        spaceBetween: 34,
      },
    },
  })
})
