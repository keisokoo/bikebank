import Swiper from "swiper"

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-motors", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1048: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  })
  console.log(swiper)
})
