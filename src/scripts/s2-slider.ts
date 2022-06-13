import Swiper, { Pagination } from "swiper"

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-motors", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    modules: [Pagination],
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      enabled: true,
      clickable: true,
    },
  })
})
