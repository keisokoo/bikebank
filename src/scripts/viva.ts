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
    spaceBetween: 34,
    loop: false,
    centeredSlides: true,
  })
})
