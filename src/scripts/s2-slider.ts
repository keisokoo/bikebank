import Swiper, { Pagination } from "swiper"

document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-motors", {
    direction: "horizontal",
    modules: [Pagination],
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: false,
  })
})
